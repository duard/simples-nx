import { ApiProperty } from '@nestjs/swagger';
import { CrudValidationGroups } from '@nestjsx/crud';
import { IsDefined, IsInt, IsOptional, IsString } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
  RelationId,
} from 'typeorm';
import { MESSAGES } from '@meto/shared-things';
import { Profile } from '../profile/profile.entity';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity('menus')
export class Menu {
  @ApiProperty()
  @IsOptional({ always: true })
  @PrimaryGeneratedColumn({ name: 'id_menu' })
  id: number;

  @ApiProperty()
  @IsOptional({ groups: [UPDATE] })
  @OneToMany(type => Menu, menu => menu.menu, { cascade: true, nullable: true, eager: true })
  menus: Menu[];

  @ApiProperty()
  @IsOptional({ groups: [UPDATE] })
  @ManyToOne(type => Menu, menu => menu.menus)
  @JoinColumn({ name: 'id_menupai' })
  menu: Menu;

  @Column({ name: 'id_menupai', nullable: true })
  parentId: number;

  @ApiProperty()
  @IsInt({ message: MESSAGES.IS_INT })
  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE], message: MESSAGES.NOT_EMPTY })
  @Column({ name: 'nr_ordem', nullable: false, type: 'smallint' })
  index: number;

  @ApiProperty()
  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE], message: MESSAGES.NOT_EMPTY })
  @IsString({ message: MESSAGES.IS_STRING })
  @Column({ name: 'nm_menu', type: 'varchar', nullable: false, length: 50 })
  title: string;

  @ApiProperty()
  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE], message: MESSAGES.NOT_EMPTY })
  @IsString({ message: MESSAGES.IS_STRING })
  @Column({ name: 'ur_menu', type: 'varchar', nullable: false, length: 250 })
  url: string;

  @ApiProperty()
  @IsOptional({ groups: [UPDATE] })
  @IsString({ message: MESSAGES.IS_STRING })
  @Column({ name: 'nm_icone', type: 'varchar', length: 30, nullable: true })
  icon: string;

  @IsOptional({ groups: [CREATE, UPDATE] })
  @ManyToMany(() => Profile)
  @JoinTable({
    name: 'perfil_menu',
    joinColumn: { name: 'id_menu', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'id_perfil', referencedColumnName: 'id' },
  })
  profiles: Profile[];

  @ApiProperty()
  @Column({ name: 'sn_ativo', type: 'smallint', default: 1 })
  status: number;

  @Column({ name: 'dt_cadast', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ name: 'dt_altera', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
