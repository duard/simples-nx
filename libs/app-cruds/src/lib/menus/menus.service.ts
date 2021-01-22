import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MenusCollectionService extends EntityCollectionServiceBase<any> {
  menus$: Observable<any>;

  constructor(elementsFactory: EntityCollectionServiceElementsFactory) {
    super('Menus', elementsFactory);
  }
}
