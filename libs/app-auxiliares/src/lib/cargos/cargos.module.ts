import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { AppSharedModule, MaterialModule } from '@simples/app-shared';

import { CargosComponent } from './cargos.component';
import { FormComponent } from './form/form.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  {
    path: '',
    component: CargosComponent,
    children: [
      { path: 'index', component: IndexComponent, data: { page: 'Todos Cargos', tela: 'administradorIconeCargos' } },
      { path: ':id', component: FormComponent }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    MaterialModule,
    AppSharedModule,
  ],
  declarations: [CargosComponent, FormComponent, IndexComponent],
})
export class CargosModule {
  public static forRoot(
    environment: any
  ): ModuleWithProviders<CargosModule> {
    return {
      ngModule: CargosModule,
      providers: [
        {
          provide: 'env',
          useValue: environment,
        },
      ],
    };
  }

  constructor(
    @Optional()
    @SkipSelf()
    parentModule?: CargosModule
  ) {
    if (parentModule) {
      throw new Error(
        'CargosModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
