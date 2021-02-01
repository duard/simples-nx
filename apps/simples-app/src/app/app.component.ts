import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NavigationFacade, SettingsFacade } from '@simples/app-store';
import { MultilevelMenuService } from 'ng-material-multilevel-menu';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { navigation, navigation3 } from './menu';

// import * as fromIssue from './store/issue/issue.selectors';
// import { reset } from './store/meta-reducers';
@Component({
  selector: 'simples-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  appitems = navigation;
  navItems = navigation3;

  title = 'simples-app';
  subs: Array<Subscription> = [];

  @ViewChild('sidenav1') sidenav: MatSidenav;
  navigationLoading$: Observable<boolean>;
  leftSideNav$ = this.settingsFacade.selectSidenav$;

  public onSideNavChange: boolean;

  constructor(
    private store: Store,
    // private storeFacade: StoreFacade,
    private navFacade: NavigationFacade,
    private settingsFacade: SettingsFacade,
    private cdRef: ChangeDetectorRef,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private route: ActivatedRoute,
    private multilevelMenuService: MultilevelMenuService
  ) {
    this.navigationLoading$ = this.navFacade.selectLoading$;

    // this.subs[0] = this.router.events
    // .pipe(
    //   filter(event => event instanceof NavigationEnd),
    //   map(() => this.route.snapshot),
    //   map(route => {
    //     while (route.firstChild) {
    //       route = route.firstChild;
    //     }
    //     return route;
    //   })
    // )
    // .subscribe((route: ActivatedRouteSnapshot) => {
    //   console.log(route.data);
    // });
  }

  ngOnInit() {
    // this.storeFacade.resetCache();
  }

  ngAfterViewInit() {
    // console.log(this.sidenav);
    this.ngDoCheck();
  }

  onChangeLeftSideNav() {
    const sideNavPayload = !this.sidenav?.opened;
    // this.settingsFacade.changeLeftSidenav(sideNavPayload);
  }

  reset(): void {
    // this.storeFacade.resetCache();
  }

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
    // console.log('dESTRUIÇÃO TOTAL');
    this.subs.forEach(s => s.unsubscribe());
  }

  // tslint:disable-next-line: member-ordering
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}
