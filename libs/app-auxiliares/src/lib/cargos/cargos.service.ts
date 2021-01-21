import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import * as fromCargos from '@simples/app-store';
import { Cargo } from '@simples/shared/interfaces';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CargosCollectionService extends EntityCollectionServiceBase<
  Cargo
> {
  cargos$: Observable<any>;

  constructor(elementsFactory: EntityCollectionServiceElementsFactory) {
    super('Cargos', elementsFactory);
    // this.cargos$ = entityService.selectors$.pageInfo$
  }

  // resolve(data: Cargo): Observable<Cargo> {
  //   return this.update({ ...data, resolved: true });
  // }
}
