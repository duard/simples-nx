import { EntitySelectorsFactory } from '@ngrx/data';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Cargo } from '@simples/shared/interfaces';
import * as fromCargos from '..';

import * as fromRouter from '../router/router.selectors';

export const {
  selectEntities,
  selectEntityMap,
} = new EntitySelectorsFactory().create<Cargo>('cargos');



export const ownerSelectors = new EntitySelectorsFactory().create<Cargo>('Cargos');

 
// export const selectCargoState = (state: State) => state.cargo;


// export const selectPackage = createSelector(
//   selectEntities,
//   (data): CargosStats => {
//     const resolved = data.filter((data) => data.resolved);
//     return {
//       total: data.length,
//       resolved: resolved.length,
//     };
//   }
// );

export const selectActiveId = fromRouter.selectRouteParam('id');
export const selectTotal = fromRouter.selectRouteParam('total');

export const selectActive = createSelector(
  selectEntityMap,
  selectActiveId,
  (entities, id) => entities[id]
);
