import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'dashboard',
    loadChildren: () => import('@simples/pages').then((m) => m.NxModule)
  },

  {
    path: 'nx',
    loadChildren: () => import('@simples/pages').then((m) => m.NxModule)
  },
  {
    path: 'auxiliares/cargos',
    loadChildren: () => import('@simples/app-auxiliares').then((m) => m.CargosModule)
  },

  {
    path: '',
    loadChildren: () => import('@simples/pages').then((m) => m.NxModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],

  exports: [RouterModule],
})
export class AppRoutingModule {}
