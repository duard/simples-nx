import {
  ChangeDetectorRef,
  Component,
  HostBinding,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import {
  NavigationFacade,
  SettingsFacade,
  StoreFacade,
} from '@simples/app-store';
import { Observable } from 'rxjs';

import {
  onMainContentChange,
  sideNavAnimation,
  sideNavContainerAnimation,
} from './app.animations';
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
  title = 'simples-app'

  @ViewChild('sidenav') sidenav: MatSidenav;
  navigationLoading$: Observable<boolean>;
  leftSideNav$ = this.settingsFacade.selectSidenav$;

  public onSideNavChange: boolean;

  constructor(
    private store: Store,
    private storeFacade: StoreFacade,
    private navFacade: NavigationFacade,
    private settingsFacade: SettingsFacade,
    private cdRef: ChangeDetectorRef
  ) {
    this.navigationLoading$ = this.navFacade.selectLoading$;
  }

  ngOnInit() {
    console.log('ngOnInit AppComponent');
    // this.storeFacade.resetCache();
  }

  ngAfterViewInit() {
    this.ngDoCheck();
  }

  onChangeLeftSideNav() {
    const sideNavPayload = !this.sidenav?.opened;
    this.settingsFacade.changeLeftSidenav(sideNavPayload);
  }

  reset(): void {this.storeFacade.resetCache()}

  mouseenter() {
    // console.log('mouse entrou');
  }

  mouseleave() {
    // console.log('mouse saiu');
  }

  ngDoCheck(): void {
    this.cdRef.detectChanges();
  }

  ngOnDestroy(): void {
    console.log('dESTRUIÇÃO TOTAL');
  }

  // tslint:disable-next-line: member-ordering
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some((h) =>
    h.test(window.location.host)
  );
}
