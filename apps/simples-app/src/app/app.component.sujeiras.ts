import { MediaMatcher } from '@angular/cdk/layout';
import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { NavigationFacade, SettingsFacade } from '@simples/app-store';
import { interval, Observable } from 'rxjs';
import { delayWhen } from 'rxjs/operators';

import { navigation } from './menu';

// import * as fromIssue from './store/issue/issue.selectors';
// import { reset } from './store/meta-reducers';
@Component({
  selector: 'simples-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  appitems = navigation;

  private _mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;
  isExpanded = true;
  @ViewChild('sidenav') sidenav: MatSidenav;
  // showSubmenu: boolean = false;
  isShowing = false;
  // showSubSubMenu: boolean = false;
  navigationLoading$: Observable<boolean>;
  leftSideNav$ = this.settingsFacade.selectSidenav$;

  constructor(
    private store: Store,
    private navFacade: NavigationFacade,
    private settingsFacade: SettingsFacade,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    // this.stats$ = this.store.select(fromIssue.selectStats);
    // this.navigationLoading$ = this.navFacade.selectLoading$;
    console.log('constructor AppComponent');

    // console.log(JSON.stringify(this.appitems));

    this.navigationLoading$ = this.navFacade.selectLoading$
    // .pipe(
      // tap((val) => console.log(`initial emit:${val}`)),
      // delayWhen((loading) => interval(loading ? 0 : 500))
    // );

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    console.log('ngOnInit AppComponent');
  }

  onChangeLeftSideNav() {
    const sideNavPayload = !this.sidenav?.opened;
    this.settingsFacade.changeLeftSidenav(sideNavPayload);
  }


  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  // tslint:disable-next-line: member-ordering
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some((h) =>
    h.test(window.location.host)
  );
}
