import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  Inject,
  Injector,
  OnDestroy,
  OnInit
} from '@angular/core';

import { BaseComponent } from '../inheritance.component';

@Component({
  selector: 'app-parent-inheritance',
  template: '<p>parent page crud</p>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrudDlgApiComponent extends BaseComponent implements OnInit {
  constructor(injector: Injector, @Inject('environment') env?: any) {
    super(injector, env);
    if (!this.isDev) {
    }
  }

  ngOnInit(): void {}

  // onRefresh(params?) {}

  onDblClick(rec): void {}

  onAdd(): void {}

  onClickSearch(): void {}
}
