import { BaseMysqlEntity } from '@simples/api-shared';
import { Teste } from '@simples/shared/interfaces';
import { Column, Entity } from 'typeorm';

@Entity('testes')
export class TesteEntity extends BaseMysqlEntity<Teste> {
  @Column({ name: 'descricao', unique: true, length: 60 })
  description: string;
}
