import { AfterViewInit, ChangeDetectionStrategy, Component, Inject, Injector, OnInit } from '@angular/core';
import { CrudDlgApiComponent } from '@simples/app-shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenusComponent extends CrudDlgApiComponent implements OnInit, AfterViewInit {
  data$: Observable<any[]>;

  constructor(injector: Injector, @Inject('environment') env?: any) {
    super(injector, env);
  }

  ngOnInit(): void {}

  onActivate(elementRef) {
    if (!elementRef) {
      console.log('Nothing Here');
      return;
    } else {
      // console.log('elementRef', elementRef);

      if (elementRef.refresh) {
      }
      if (elementRef.dblClick) {
      }
    }
  }
}
