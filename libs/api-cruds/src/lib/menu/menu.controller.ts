import { Controller, Query } from '@nestjs/common';
import { Crud, CrudController, CrudRequest, Override, ParsedRequest } from '@nestjsx/crud';
import { parseSearch } from '@simples/api-shared';

import { MenusEntity } from './menu.entity';
import { MenuService } from './menu.service';

@Crud({
  model: {
    type: MenusEntity
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
@Controller('menus')
export class MenuController implements CrudController<MenusEntity> {
  constructor(public service: MenuService) {
    console.log('contructor MenuController');
  }

  get base(): CrudController<MenusEntity> {
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
}
