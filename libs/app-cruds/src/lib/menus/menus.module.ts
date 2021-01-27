import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { AppSharedModule, MaterialModule } from '@simples/app-shared';

import { FormComponent } from './form/form.component';
import { IndexComponent } from './index/index.component';
import { MenusComponent } from './menus.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  {
    path: '',
    component: MenusComponent,
    data: { msg: 'page msg' },
    children: [
      { path: 'index', component: IndexComponent, data: { page: 'Todos Menus', tela: 'Menus', menu: 'menus' } },
      { path: ':id', component: FormComponent }
    ]
  }
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), FlexLayoutModule, MaterialModule, AppSharedModule],
  declarations: [MenusComponent, FormComponent, IndexComponent]
})
export class MenusModule {}
