import { ApiProperty } from '@nestjs/swagger';
import { CrudValidationGroups } from '@nestjsx/crud';
import { BaseMysqlEntity, MESSAGES } from '@simples/api-shared';
import { Menu } from '@simples/shared/interfaces';
import { IsDefined, IsInt, IsOptional, IsString } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';

import { ProfileEntity } from '../profile/profile.entity';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity('menus')
export class MenusEntity extends BaseMysqlEntity<Menu> {
  @Column({ name: 'index', nullable: false, type: 'smallint' })
  index: number;

  @Column({ name: 'title', type: 'varchar', length: 50, nullable: true })
  title: string;

  @Column({ name: 'icon', type: 'varchar', length: 30, nullable: true })
  icon: string;

  @Column({ name: 'link', unique: true, length: 250 })
  link: string;

  @Column({ name: 'type', type: 'varchar', length: 30, nullable: true })
  type: string;

  @ApiProperty()
  @IsOptional({ groups: [UPDATE] })
  @OneToMany(() => MenusEntity, menu => menu.parentId, { cascade: true, nullable: true, eager: true })
  menus: Menu[];

  @ApiProperty()
  @IsOptional({ groups: [UPDATE] })
  @ManyToOne(() => MenusEntity, menu => menu.menus, { nullable: true })
  @JoinColumn({ name: 'parent_id' })
  parentId: Menu;

  @IsOptional({ groups: [CREATE, UPDATE] })
  @ManyToMany(() => ProfileEntity)
  @JoinTable({
    name: 'perfil_menu',
    joinColumn: { name: 'menu_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'perfil_id', referencedColumnName: 'id' }
  })
  profiles: ProfileEntity[];
}
