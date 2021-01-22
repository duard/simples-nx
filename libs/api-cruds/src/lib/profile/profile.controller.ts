import { Controller, Query } from '@nestjs/common';
import { Crud, CrudController, CrudRequest, Override, ParsedBody, ParsedRequest } from '@nestjsx/crud';
import { parseSearch } from '@simples/api-shared';

import { ProfileEntity } from './profile.entity';
import { ProfileService } from './profile.service';

@Crud({
  model: {
    type: ProfileEntity
  },
  query: {
    alwaysPaginate: true,
    limit: 10,
    sort: [{ field: 'id', order: 'DESC' }],
    join: {
      menus: {
        allow: []
      }
    }
  }
})
@Controller('profiles')
export class ProfileController implements CrudController<ProfileEntity> {
  constructor(public service: ProfileService) {}

  get base(): CrudController<ProfileEntity> {
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

  @Override()
  createOneBase(@ParsedRequest() req: CrudRequest, @ParsedBody() body: ProfileEntity) {
    console.log('body', body);
    return this.base.createOneBase(req, body);
  }
}
