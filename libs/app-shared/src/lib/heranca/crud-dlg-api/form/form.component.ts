import { AfterViewInit, ChangeDetectionStrategy, Component, Inject, Injector, OnInit } from '@angular/core';
import { DialogRef, DialogService } from '@ngneat/dialog';
import { FormBuilder, FormGroup } from '@ngneat/reactive-forms';

import { BaseComponent } from '../../inheritance.component';

// import { State, TeleiroService } from 'projects/lib-core/src/public_api';
@Component({
  selector: 'app-form-inheritance',
  template: '<p>form page crud</p>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormDlgApiComponent extends BaseComponent implements OnInit, AfterViewInit {
  protected dialog: DialogService;
  protected fb: FormBuilder;

  operation: string;

  titulo = 'CRUD-TELA-SEM-TITULO';

  formCRUD: FormGroup;

  constructor(injector: Injector, @Inject('environment') env?: any, public dlgRef?: DialogRef) {
    super(injector, env);

    this.dialog = this.injectorObj.get(DialogService);
    this.fb = this.injectorObj.get(FormBuilder);

    if (!this.isDev) {
    }
  }

  ngOnInit() {
    super.ngOnInit();

    if (this.operation === 'new') {
      this.titulo = `Novo Registro`;
      // tslint:disable-next-line:forin
      for (const i in this.formCRUD.controls) {
        this.formCRUD.controls[i].markAsTouched();
      }
    } else if (this.operation === 'edit') {
      this.titulo = `Editando Registro ${this.dlgRef.data.id}`;

      for (const i in this.formCRUD.controls) {
        this.formCRUD.controls[i].markAsTouched();
      }
      this.formCRUD.patchValue(this.dlgRef.data.payload);
    }

    console.log('operation', this.operation, this.dlgRef.data.payload);
  }

  // ngAfterViewInit() {
  //   console.log('form base ngAfterViewInit')
  //   super.ngAfterViewInit();
  //   this.ngDoCheck();
  // }

  onSave($event?: any) {
    // tslint:disable-next-line:forin
    for (const i in this.formCRUD.controls) {
      this.formCRUD.controls[i].enable();
    }
    if (!this.formCRUD.valid) {
      if (this.isDev) {
        console.log('Formulário inválido', this.formCRUD.value);
      }
      return;
    }

    this.dlgRef.close({
      payload: this.formCRUD.value,
      operation: this.operation
    });
  }

  onDelete() {
    // if (confirm('Você está certo de que DESEJA EXCLUIR este registro?')) {
    //   this.operation = 'delete';
    //   this.dialogRef.close({
    //     payload: this.formCRUD.value,
    //     operation: this.operation
    //   });
    // }

    this.dialog
      .confirm({
        title: 'Excluir registro ?',
        body: 'Deseja realmente excluir o registro ?'
      })
      .afterClosed$.subscribe(confirmed => {
        console.log('Usuário excluiu o registro', confirmed);
      });
  }

  onCancel(): void {
    this.formCRUD.reset();
    this.operation = 'index';
    this.dlgRef.close();
  }
}
