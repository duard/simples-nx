import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as thisActions from './settings.actions';
import * as fromSelector from './settings.selectors';

@Injectable({
  providedIn: 'root',
})
export class SettingsFacade {
  selectSidenav$ = this.store$.select(fromSelector.selectSettingsSideNav);

  constructor(private store$: Store) {}

  changeLeftSidenav(payload: boolean) {
    this.store$.dispatch(thisActions.actionSettingsChangeSideNav({ sideNav: payload }));
  }
}
