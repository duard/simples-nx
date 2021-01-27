import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('@simples/pages').then(m => m.NxModule)
  },

  {
    path: 'nx',
    loadChildren: () => import('@simples/pages').then(m => m.NxModule)
  },
  {
    path: 'auxiliares/cargos',
    loadChildren: () => import('@simples/app-auxiliares').then(m => m.CargosModule)
  },

  {
    path: 'seguranca/profiles',
    loadChildren: () => import('@simples/app-cruds').then(m => m.ProfilesModule)
  },

  {
    path: 'seguranca/menus',
    loadChildren: () => import('@simples/app-cruds').then(m => m.MenusModule)
  },

  {
    path: '',
    loadChildren: () => import('@simples/pages').then(m => m.NxModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled', paramsInheritanceStrategy: 'always' })],

  exports: [RouterModule]
})
export class AppRoutingModule {}
