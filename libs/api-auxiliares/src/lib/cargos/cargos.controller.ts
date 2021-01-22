import { Controller, Get, Query } from '@nestjs/common';
import { Crud, CrudController, CrudRequest, Override, ParsedRequest } from '@nestjsx/crud';
import { parseSearch } from '@simples/api-shared';
import { Cargo } from '@simples/shared/interfaces';

import { CargosEntity } from './cargos.entity';
import { CargosService } from './cargos.service';

@Crud({
  model: {
    type: CargosEntity
  },

  query: {
    // limit: 20,
    cache: 1000,
    maxLimit: 1000,
    alwaysPaginate: true,
    sort: [{ field: 'id', order: 'DESC' }]
  },
  params: {
    id: {
      field: 'id',
      type: 'number',
      primary: true
    }
  }
})
@Controller('cargos')
export class CargosController implements CrudController<CargosEntity> {
  constructor(public service: CargosService) {
    console.log('contructor CargosController');
  }

  get base(): CrudController<Cargo> {
    return this;
  }

  @Override()
  getMany(@ParsedRequest() req: CrudRequest, @Query() query: { search: string; searchBy: string }) {
    req.parsed.offset = req.parsed.limit * req.parsed.offset;

    const { search, searchBy } = query;

    if (search) {
      req.parsed.search.$and = parseSearch(search, searchBy);
    }

    return this.base.getManyBase(req);
  }

  @Get('hello')
  getData(): unknown {
    return this.service.getData();
  }
}
