import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';

import { MenusEntity } from './menu.entity';

@Injectable()
export class MenuService extends TypeOrmCrudService<MenusEntity> {
  constructor(
    @InjectRepository(MenusEntity)
    private readonly menuRepository: Repository<MenusEntity>
  ) {
    super(menuRepository);
  }
}
