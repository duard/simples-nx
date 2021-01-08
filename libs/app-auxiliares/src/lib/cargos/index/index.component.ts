import { AfterViewInit, ChangeDetectionStrategy, Component, Inject, Injector, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IndexDlgApiComponent } from '@simples/app-shared';
import { Cargo } from '@simples/shared/interfaces';
import { Observable } from 'rxjs';

import { CargosCollectionService } from '../cargos.service';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'simples-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexComponent
  extends IndexDlgApiComponent
  implements OnInit, AfterViewInit {
  titulo = 'Cargos';
  selectedId = 0;

  localParams: any;

  data$: Observable<Cargo[]>;
  

  displayedColumns: string[] = [
    'id',
    // 'created_at',
    // 'updated_at',
    // 'deleted_at',
    // 'is_deleted',
    // 'is_active',
    'description',
  ];

  constructor(
    private injector: Injector,
    @Inject('env') public env,
    private dataService: CargosCollectionService
  ) {
    super(injector, env);

    this.data$ = this.dataService.filteredEntities$;
  }

  ngOnInit() {
    this.onRefresh();
  }
 
  ngAfterViewInit() {
    // super.ngAfterViewInit();

    this.data$.subscribe((data: Cargo[]) => {
      if (data.length <= 0) {
        return;
      }
      console.log(data);
      this.unsubsribeOnDestroy;
    })
  }

  onRefresh() {
    this.dataService.load();
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


    const dialogRef = this.dialog.open(FormComponent, {
      closeButton: false,
      enableClose: false,
      draggable: true,
      height: '240',
      backdrop: true,
      data: {
        id: this.selectedId,
        payload: registro,
        operation: this.operation,
      },
    });

    dialogRef.afterClosed$.subscribe((result) => {

      if (this.isDev) {
        console.log('operation', this.operation, 'dados', result);
      }

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

  onClickSearch() {}

  onCancelSearch() {}

  onFilter(param) {}

  onPaginateAPI() {}
}
