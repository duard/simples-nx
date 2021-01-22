import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';
import { MenusEntity } from './menu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MenusEntity])],
  controllers: [MenuController],
  providers: [MenuService]
})
export class MenuModule {}
