import { Controller, Query } from '@nestjs/common';
import { Crud, CrudController, CrudRequest, Override, ParsedBody, ParsedRequest } from '@nestjsx/crud';

import { Profile } from './profile.entity';
import { ProfileService } from './profile.service';
import { parseSearch } from '@meto/shared-things';

@Crud({
  model: {
    type: Profile,
  },
  query: {
    alwaysPaginate: true,
    limit: 10,
    sort: [{ field: 'id', order: 'DESC' }],
    join: {
      menus: {
        allow: [],
      },
    },
  },
})
@Controller('profiles')
export class ProfileController implements CrudController<Profile> {
  constructor(public service: ProfileService) {}

  get base(): CrudController<Profile> {
    return this;
  }

  @Override()
  getMany(
    @ParsedRequest() req: CrudRequest,
    @Query() query: { search: string; searchBy: string; orderBy: string; orderType: any }
  ) {
    const { search, searchBy, orderBy, orderType } = query;

    if (orderType) {
      const order: any = orderType.toUpperCase();
      req.options.query.sort = [{ order, field: orderBy }];
    }

    if (search) {
      const column = searchBy ? searchBy : 'name';
      req.parsed.search.$and = parseSearch(search, column);
    }

    return this.base.getManyBase(req);
  }

  @Override()
  createOneBase(@ParsedRequest() req: CrudRequest, @ParsedBody() body: Profile) {
    console.log('body', body);
    return this.base.createOneBase(req, body);
  }
}
