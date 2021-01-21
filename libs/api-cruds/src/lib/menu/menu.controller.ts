import { Controller, Query } from '@nestjs/common';
import { Crud, CrudController, CrudRequest, Override, ParsedRequest } from '@nestjsx/crud';
// import { QueryDto } from '../../../shared/dto/query.dto';

import { Menu } from './menu.entity';
import { MenuService } from './menu.service';
import { QueryDto } from '@meto/shared-things';

@Crud({
  model: {
    type: Menu,
  },
  query: {
    alwaysPaginate: true,
    // limit: 10,
    sort: [{ field: 'id', order: 'DESC' }],
    join: {
      menus: {
        allow: [],
      },
      menu: {
        allow: [],
      },
      profiles: {
        allow: [],
      },
    },
  },
})
@Controller('menus')
export class MenuController implements CrudController<Menu> {
  constructor(public service: MenuService) {}

  get base(): CrudController<Menu> {
    return this;
  }

  @Override()
  getMany(@ParsedRequest() req: CrudRequest, @Query() query: QueryDto) {
    if (query.orderType) {
      const order: any = query.orderType.toUpperCase();
      req.options.query.sort = [{ order, field: query.orderBy }];
    }

    return this.base.getManyBase(req);
  }
}
