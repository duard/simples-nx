import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Inject,
  Injector,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Logger } from '@simples/app-core';
import { MultilevelMenuService } from 'ng-material-multilevel-menu';
import { Subject, Subscription } from 'rxjs';

import { LoadingService } from '../components/loading/loading.service';

@Component({
  selector: 'app-inheritance',
  template: '<p>inheritance page crud</p>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterViewInit,
    AfterContentInit,
    AfterViewChecked,
    AfterContentChecked,
    AfterViewChecked,
    OnDestroy {
  private isAlive$ = new Subject<any>();
  protected cdRef: ChangeDetectorRef;
  protected router: Router;
  protected subscription: Subscription;
  protected multilevelMenuService: MultilevelMenuService;
  protected activeRoute: ActivatedRoute;
  protected loadingService: LoadingService;

  subscriptions: Subscription[] = [];
  isDev = false;
  log = new Logger();
  order = 1;

  constructor(protected injectorObj?: Injector, @Inject('environment') env?: any) {
    this.isDev = !env.production;
    this.cdRef = this.injectorObj.get(ChangeDetectorRef);
    this.router = this.injectorObj.get(Router);
    this.activeRoute = this.injectorObj.get(ActivatedRoute);
    this.loadingService = this.injectorObj.get(LoadingService);
    this.multilevelMenuService = this.injectorObj.get(MultilevelMenuService);
    // console.log('I am from constructor()!! and my order::::' + this.order);
    this.order++;
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('I am from ngOnChanges()!! and my order::::' + this.order);
    this.order++;
  }

  ngOnInit() {
    // console.log('I am from ngOnInit() and my order::::' + this.order);
    this.order++;
  }

  ngDoCheck() {
    // console.log('I am from ngDoCheck() and my order::::' + this.order);
    this.order++;
    this.cdRef.detectChanges();
  }

  ngAfterContentInit() {
    // console.log('I am from ngAfterContentInit() and my order::::' + this.order);
    this.order++;
  }

  ngAfterContentChecked() {
    // console.log(      'I am from ngAfterContentChecked() and my order::::' + this.order    );
    this.order++;
  }

  ngAfterViewInit() {
    // console.log('I am from ngAfterViewInit() and my order::::' + this.order);
    this.order++;
    this.ngDoCheck();
  }

  ngAfterViewChecked() {
    // console.log('I am from ngAfterViewChecked() and my order::::' + this.order);
    this.order++;
  }

  ngOnDestroy(): void {
    // console.log('I am from ngOnDestroy() and my order::::' + this.order);
    this.order++;

    this.isAlive$.next();
    this.isAlive$.complete();

    if (this.subscriptions) {
      this.subscriptions.forEach(s => s.unsubscribe());
    }

    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    if (this.isDev) {
    }
  }
}
