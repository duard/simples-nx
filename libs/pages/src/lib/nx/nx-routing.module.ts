import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NxComponent } from './nx.component';

const routes: Routes = [
  {
    path: '',
    component: NxComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NxRoutingModule {}
