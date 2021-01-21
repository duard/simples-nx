
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as thisActions from './meta-reducers';
import { reset } from "./meta-reducers";

@Injectable({
  providedIn: 'root'
})
export class StoreFacade {


  constructor(private store$: Store) {}

  resetCache() {
    // console.log('reseting');
    this.store$.dispatch(reset());  }
}
