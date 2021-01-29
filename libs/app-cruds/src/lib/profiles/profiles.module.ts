import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { AppSharedModule, MaterialModule } from '@simples/app-shared';

import { FormComponent } from './form/form.component';
import { IndexComponent } from './index/index.component';
import { ProfilesComponent } from './profiles.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  {
    path: '',
    component: ProfilesComponent,
    children: [
      { path: 'index', component: IndexComponent, data: { page: 'Cadastro de Perfis', tela: 'Perfis' } },
      { path: ':id', component: FormComponent }
    ]
  }
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), FlexLayoutModule, MaterialModule, AppSharedModule],
  declarations: [ProfilesComponent, FormComponent, IndexComponent]
})
export class ProfilesModule {}
