import { BaseMysqlEntity } from '@simples/api-shared';
import { Cargo } from '@simples/shared/interfaces';
import { Column, Entity } from 'typeorm';

@Entity('cargos')
export class CargosEntity extends BaseMysqlEntity<Cargo> {
  @Column({ name: 'descricao', unique: true, length: 160 })
  description: string;
}
