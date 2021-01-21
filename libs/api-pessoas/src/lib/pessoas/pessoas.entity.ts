import { BaseMysqlEntity } from '@simples/api-shared';
import { Pessoa } from '@simples/shared/interfaces';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

import { UsuariosEntity } from '../usuarios/usuarios.entity';

@Entity('pessoas')
export class PessoasEntity extends BaseMysqlEntity<Pessoa> {
  @Column({
    type: 'enum',
    enum: ['F', 'J'],
    name: 'tipo_pessoa',
    nullable: false,
  })
  tipoPessoa: 'F' | 'J';

  @Column({
    type: 'varchar',
    length: 150,
    name: 'email',
    nullable: true,
    unique: false,
  })
  email: string;

  // @OneToMany(() => UsuariosEntity, user => user.person, { cascade: true, onUpdate: 'CASCADE', onDelete: 'CASCADE' })
  // users: UsuariosEntity[];

  // @OneToOne(() => UsuariosEntity, usuario => usuario, { cascade: true, onUpdate: 'CASCADE', onDelete: 'CASCADE' })
  // users: UsuariosEntity;

  // @OneToOne(() => UsuariosEntity, { nullable: true })
  // @JoinColumn({ name: 'fk_pessoa_usuario' })
  // usuario: UsuariosEntity;

  @OneToOne(() => UsuariosEntity, (usuario) => usuario.id, { nullable: true }) // specify inverse side as a second parameter
  @JoinColumn({ name: 'usuario_id' })
  usuario: UsuariosEntity;
}

// @Entity('testes')
// export class TesteEntity {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column({ name: 'description', unique: true, length: 60 })
//   description: string;

//   @Column({ name: 'dt_created', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
//   dtCreated: Date;

//   @Column({ name: 'dt_updated', type: 'timestamp' })
//   dtUpdated: Date;

//   @Column({ name: 'dt_deleted', type: 'timestamp' })
//   dtDeleted: Date;

//   @Column({ name: 'deleted', nullable: false, default: false }) deleted: boolean;
//   @Column({ name: 'active', nullable: false, default: true }) active: boolean;
// }
