import { AfterViewInit, ChangeDetectionStrategy, Component, Inject, Injector, OnDestroy, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { DialogRef } from '@ngneat/dialog';
import { FormControl, FormGroup, NgValidatorsErrors } from '@ngneat/reactive-forms';
import { FormDlgApiComponent } from '@simples/app-shared';
import { Cargo } from '@simples/shared/interfaces';

@Component({
  selector: 'simples-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent
  extends FormDlgApiComponent
  implements OnInit, AfterViewInit, OnDestroy {

  constructor(
    private injector: Injector,
    @Inject('env') public env,
    public dlgRef: DialogRef
  ) {
    super(injector, env, dlgRef);

    this.operation = dlgRef.data.operation;

    this.formCRUD = new FormGroup<Cargo, NgValidatorsErrors>(
      {
        // id: new FormControl(null),
        description: new FormControl('', {
          validators: [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(200),
          ],
        }),
        // createdAt: new FormControl(null),
        // updatedAt: new FormControl(null),
        // deletedAt: new FormControl(null),
        isActive: new FormControl(true),
        // isDeleted: new FormControl(null),
      },
      { updateOn: 'change' }
    );
  }

  ngOnInit() {
    super.ngOnInit();
    // console.log(this.dlgRef);
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
  }


  onCancel() {
    this.dlgRef.close({
      payload: null,
      operation: this.operation,
    });    
  }

  onMenuClick() {
    console.log('Click do menu do Dlg');
  }

  fakeArray(length: number): Array<any> {
    if (length >= 0) {
      return new Array(length);
    }
  }

  ngOnDestroy(): void {
    // console.log('Destruíndo formulario');
    // this.ref.close();
    super.ngOnDestroy();
  }
}
