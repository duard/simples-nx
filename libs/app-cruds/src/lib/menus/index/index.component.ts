import { AfterViewInit, ChangeDetectionStrategy, Component, Inject, Injector, OnInit } from '@angular/core';
import { IndexDlgApiComponent } from '@simples/app-shared';
import { Cargo, Menu } from '@simples/shared/interfaces';
import { Observable } from 'rxjs';

import { FormComponent } from '../form/form.component';
import { MenusCollectionService } from '../menus.service';

@Component({
  selector: 'simples-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexComponent extends IndexDlgApiComponent implements OnInit, AfterViewInit {
  titulo = 'Menus';
  selectedId = 0;
  localParams = 'menus';

  selectors$ = this.dataService.selectors$;
  loading$: Observable<boolean>;
  data$: Observable<Menu[]> = this.dataService.filteredEntities$;

  displayedColumns: string[] = [
    'id',
    // 'index',
    // 'title',
    // 'link',
    // 'type',
    // 'parentId',
    // 'created_at',
    // 'updated_at',
    // 'deleted_at',
    // 'is_deleted',
    // 'is_active',
    'title'
  ];

  constructor(private injector: Injector, @Inject('env') public env, private dataService: MenusCollectionService) {
    super(injector, env);
    // localStorage.removeItem(this.localParams);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
    this.onPaginateAPI();
    this.isInitializating = false;
  }

  onRefresh(params?: any) {
    super.onRefresh();
    this.dataService.clearCache();
    this.dataService.getWithQuery(this.params);
  }

  onDblClick(registro: Cargo) {
    this.operation = 'edit';
    this.selectedId = registro.id;
    this.onCallForm(registro);
  }

  onAdd() {
    this.operation = 'new';
    this.onCallForm();
  }

  onCallForm(registro?: Cargo): void {
    this.dlgConfig.data = {
      id: this.selectedId,
      payload: registro,
      operation: this.operation
    };

    const dialogRef = this.dialog.open(FormComponent, this.dlgConfig);

    dialogRef.afterClosed$.subscribe(result => {
      if (!result) return;

      if (result?.operation === 'new') {
        this.dataService.add(result.payload);
      }

      if (result?.operation === 'edit') {
        result.payload.id = this.selectedId;
        this.dataService.update(result.payload);
      }

      this.operation = 'index';
    });
  }
}
