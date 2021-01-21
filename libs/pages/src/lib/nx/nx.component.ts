import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { DialogService } from '@ngneat/dialog';
import { Store } from '@ngrx/store';
import { Option, ThemeService } from '@simples/app-core';
import { NavigationFacade } from '@simples/app-store';
import { interval, Observable, Subject, timer } from 'rxjs';
import { tap } from 'rxjs/operators';

import { HelloWorldComponent } from './hello-world.component';

@Component({
  selector: 'simples-nx',
  templateUrl: './nx.component.html',
  styleUrls: ['./nx.component.scss'],
})
export class NxComponent implements OnInit, AfterViewInit, OnDestroy {
  private unsubscribe$ = new Subject();
  private timer;
  private readonly onDestroy = new Subject<void>();

  @Input() options: Array<Option>;
  @Output() themeChange: EventEmitter<string> = new EventEmitter<string>();

  direction = 'column';
  navigationLoading$: Observable<boolean>;
  isLoading = true;
  count = 0;

  private _element: HTMLScriptElement;
  public style = '';
  constructor(
    private store: Store,
    private navFacade: NavigationFacade,
    private cdr: ChangeDetectorRef,
    private dialog: DialogService,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  pivot(): void {
    this.direction = this.direction === 'row' ? 'column' : 'row';
  }

  fakeArray(length: number): Array<any> {
    if (length >= 0) {
      return new Array(length);
    }
  }

  open() {
    const dialogRef = this.dialog.open(HelloWorldComponent);
  }

  themeChangeHandler(themeToSet) {
    this.themeService.setTheme(themeToSet);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
