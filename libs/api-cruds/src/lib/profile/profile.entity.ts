import { ApiProperty } from '@nestjs/swagger';
import { CrudValidationGroups } from '@nestjsx/crud';
import { IsDefined, IsOptional, IsString, IsNumber } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Menu } from '../menu/menu.entity';
import { MESSAGES } from '@meto/shared-things';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity('perfis')
export class Profile {
  @ApiProperty()
  @IsOptional({ always: true })
  @PrimaryGeneratedColumn({ name: 'id_profile' })
  id: number;

  @ApiProperty()
  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE], message: MESSAGES.NOT_EMPTY })
  @IsString({ message: MESSAGES.IS_STRING })
  @Column({ name: 'nm_perfil', length: 30, type: 'varchar', nullable: false })
  name: string;

  @ApiProperty()
  @IsOptional({ groups: [CREATE, UPDATE] })
  @ManyToMany(type => Menu, menu => menu.profiles, { cascade: true })
  @JoinTable({
    name: 'perfil_menu',
    inverseJoinColumn: { name: 'id_menu', referencedColumnName: 'id' },
    joinColumn: { name: 'id_perfil', referencedColumnName: 'id' },
  })
  menus: Menu[];

  @Column({ name: 'dt_cadast', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ name: 'dt_altera', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}

// @ManyToOne({ entity: () => Author })
