import { EntitySelectorsFactory } from '@ngrx/data';
import { Menu } from '@simples/shared/interfaces';

export const { selectEntities, selectEntityMap } = new EntitySelectorsFactory().create<Menu>('menus');
