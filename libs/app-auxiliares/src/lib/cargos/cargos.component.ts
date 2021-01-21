import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Inject,
  Injector,
  OnInit,
} from '@angular/core';
import { CrudDlgApiComponent } from '@simples/app-shared';
import { Observable } from 'rxjs';

import { CargosCollectionService } from './cargos.service';

@Component({
  selector: 'simples-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CargosComponent
  extends CrudDlgApiComponent
  implements OnInit, AfterViewInit {
  data$: Observable<any[]>;
  titulo = 'Cargos';

  constructor(
    // private dataService: CargosCollectionService,
    injector: Injector,
    @Inject('environment') env?: any
  ) {
    super(injector, env);

    // this.data$ = this.dataService.filteredEntities$;

    this.onRefresh();
  }

  ngOnInit(): void {}

  onRefresh(params?) {
  }

  // onSearch(text: string): void {
  //   // this.dataService.setFilter(text);
  // }

  // onSubmit(issue: any): void {
  //   // this.dataService.add(issue);
  // }

  // reload() {
  //   this.log.info('Reload from cargos.component.ts');
  // }

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

  fakeArray(length: number): Array<any> {
    if (length >= 0) {
      return new Array(length);
    }
  }
}
