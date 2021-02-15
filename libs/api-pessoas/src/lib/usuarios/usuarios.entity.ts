import { BaseMysqlEntity } from '@simples/api-shared';
import { Usuario } from '@simples/shared/interfaces';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { PessoasEntity } from '../pessoas/pessoas.entity';

// import { PessoasEntity } from '../pessoas';

@Entity('usuarios')
export class UsuariosEntity extends BaseMysqlEntity<Usuario> {
  // @OneToOne(() => PessoasEntity)
  // @JoinColumn()
  // pessoa: PessoasEntity;

  // @OneToOne(() => PessoasEntity, (pessoa) => pessoa.id) // specify inverse side as a second parameter
  // pessoa: PessoasEntity;

  @ManyToOne(() => PessoasEntity, pessoa => pessoa.id, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'pessoa_id' })
  pessoa: PessoasEntity;

  @Column({
    type: 'varchar',
    name: 'password',
    length: 150,
    nullable: false,
    select: false
  })
  password: string;

  @Column({
    type: 'varchar',
    name: 'token_notify',
    nullable: true,
    length: 255
  })
  token: string;

  // @ManyToOne(type => PessoasEntity, pessoa => pessoa., { onDelete: 'CASCADE' })
  // @JoinColumn({ name: 'id_pessoa' })
  // person: Person;

  // @ManyToMany(() => Profile, { cascade: true, nullable: false })
  // @JoinTable({
  //   name: 'grupo_usuario',
  //   joinColumn: { name: 'id_usuari', referencedColumnName: 'id' },
  //   inverseJoinColumn: { name: 'id_perfil', referencedColumnName: 'id' },
  // })
  // profiles: Profile[];

  @Column({ type: 'smallint', name: 'reseted', default: 0 })
  reseted: boolean;

  @Column({ type: 'smallint', name: 'email_confirmado', default: 0 })
  checked: number;

  @Column({ type: 'int', name: 'qtd_resets', default: 0, nullable: true })
  blocked: number;
}
