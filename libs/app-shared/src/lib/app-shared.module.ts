import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MultilevelMenuService, NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';

import { LoaderComponent } from './components/loader/loader.component';
import { MediaQueryStatusComponent } from './components/media-query-status/media-query-status.component';
import { FooterMobileComponent } from './components/navigation/footer-mobile/footer-mobile.component';
import { HeaderMobileComponent } from './components/navigation/header-mobile/header-mobile.component';
import { SidenavComponent } from './components/navigation/sidenav/sidenav.component';
import { MaterialModule } from './material.module';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    NgMaterialMultilevelMenuModule, // Import here
    PerfectScrollbarModule
  ],
  declarations: [
    FooterMobileComponent,
    HeaderMobileComponent,
    SidenavComponent,
    MediaQueryStatusComponent,
    LoaderComponent,
  ],
  exports: [
    FooterMobileComponent,
    HeaderMobileComponent,
    SidenavComponent,
    MediaQueryStatusComponent,
    LoaderComponent,
  ],

  providers: [MultilevelMenuService,  {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }],
})
export class AppSharedModule {}
