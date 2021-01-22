import { EntitySelectorsFactory } from '@ngrx/data';

export const { selectEntities, selectEntityMap } = new EntitySelectorsFactory().create<any>('profiles');
