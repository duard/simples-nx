import { CrudValidationGroups } from '@nestjsx/crud';
import { BaseMysqlEntity } from '@simples/api-shared';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

import { MenusEntity } from '../menu/menu.entity';

@Entity('perfis')
export class ProfileEntity extends BaseMysqlEntity<any> {
  @Column({ name: 'description', length: 30, type: 'varchar', nullable: false })
  description: string;

  @ManyToMany(() => MenusEntity, menu => menu.profiles, { cascade: true })
  @JoinTable({
    name: 'perfil_menu',
    inverseJoinColumn: { name: 'menu_id', referencedColumnName: 'id' },
    joinColumn: { name: 'perfil_id', referencedColumnName: 'id' }
  })
  menus: MenusEntity[];
}
