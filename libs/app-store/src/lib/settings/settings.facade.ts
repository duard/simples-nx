import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as thisActions from './settings.actions';
import * as fromSelector from './settings.selectors';

@Injectable({
  providedIn: 'root'
})
export class SettingsFacade {
  selectSidenav$ = this.store$.select(fromSelector.selectSettingsSideNav);
  selectMenu$ = this.store$.select(fromSelector.selectMenu);

  constructor(private store$: Store) {}

  changeLeftSidenav(payload: boolean) {
    this.store$.dispatch(thisActions.actionSettingsChangeSideNav({ sideNav: payload }));
  }

  pushMenu(payload: any) {
    console.log('facade', payload);
    this.store$.dispatch(thisActions.actionPushMenu({ menus: payload }));
  }
}
