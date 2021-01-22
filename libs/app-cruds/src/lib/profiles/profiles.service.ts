import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import * as fromProfiles from '@simples/app-store';

import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProfilesCollectionService extends EntityCollectionServiceBase<any> {
  profiles$: Observable<any>;

  constructor(elementsFactory: EntityCollectionServiceElementsFactory) {
    super('Profiles', elementsFactory);
    // this.cargos$ = entityService.selectors$.pageInfo$
  }

  // resolve(data: Cargo): Observable<Cargo> {
  //   return this.update({ ...data, resolved: true });
  // }
}
