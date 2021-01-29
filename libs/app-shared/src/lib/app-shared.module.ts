import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from '@ngneat/dialog';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { MultilevelMenuService, NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { NgxMaskModule } from 'ngx-mask';
import { NgxMatErrorsModule } from 'ngx-mat-errors';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule
} from 'ngx-perfect-scrollbar';

import { DataTableComponent } from './components/data-table/data-table.component';
import { FormInspectorComponent } from './components/form-inspector/form-inspector.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MediaQueryStatusComponent } from './components/media-query-status/media-query-status.component';
import { MenuListItemComponent } from './components/menu-list-item/menu-list-item.component';
import { MenuThemeComponent } from './components/menu-theme/menu-theme.component';
import { FooterMobileComponent } from './components/navigation/footer-mobile/footer-mobile.component';
import { HeaderMobileComponent } from './components/navigation/header-mobile/header-mobile.component';
import { SidenavComponent } from './components/navigation/sidenav/sidenav.component';
import { ToolbarCrudDlgComponent } from './components/toolbar-crud-dlg/toolbar-crud-dlg.component';
import { ToolbarCrudFooterComponent } from './components/toolbar-crud-footer/toolbar-crud-footer.component';
import { ToolbarCrudSimplesComponent } from './components/toolbar-crud-simples/toolbar-crud-simples.component';
import { CrudDlgApiComponent } from './heranca/crud-dlg-api/crud-dlg-api.component';
import { FormDlgApiComponent } from './heranca/crud-dlg-api/form/form.component';
import { IndexDlgApiComponent } from './heranca/crud-dlg-api/index/index.component';
import { MaterialModule } from './material.module';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    NgMaterialMultilevelMenuModule, // Import here
    PerfectScrollbarModule,
    NgxMatSelectSearchModule,
    NgxMatErrorsModule,

    ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          required: 'Este campo é obrigatório',
          minlength: ({ requiredLength, actualLength }) =>
            `Esperado ${requiredLength} caracteres porém tem ${actualLength}`,
          invalidAddress: error => `Endereço inválido`
        }
      }
    }),

    DialogModule.forRoot({
      sizes: {
        sm: {
          width: '300px',
          minHeight: '250px'
        },
        md: {
          width: '60vw',
          height: '60vh'
        },
        lg: {
          width: '90vw',
          height: '90vh'
        },
        fullScreen: {
          width: '100vw',
          height: '100vh'
        }
      }
      // success: {
      //   component: AppSuccessDialog
      // },
      // confirm: {
      //   component: AppConfirmDialog
      // },
      // error: {
      //   component: AppErrorDialog
      // }
    }),

    CdkTableModule,
    CdkTreeModule,
    DragDropModule,

    NgxMaskModule.forRoot()
  ],
  declarations: [
    FooterMobileComponent,
    HeaderMobileComponent,
    SidenavComponent,
    MediaQueryStatusComponent,
    LoaderComponent,
    DataTableComponent,
    FormInspectorComponent,

    CrudDlgApiComponent,
    IndexDlgApiComponent,
    FormDlgApiComponent,

    MenuThemeComponent,

    LoadingComponent,

    MenuListItemComponent,

    ToolbarCrudSimplesComponent,
    ToolbarCrudDlgComponent,
    ToolbarCrudFooterComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NgxMatErrorsModule,
    ErrorTailorModule,

    FooterMobileComponent,
    HeaderMobileComponent,
    SidenavComponent,
    MediaQueryStatusComponent,
    LoaderComponent,
    DataTableComponent,
    FormInspectorComponent,

    CrudDlgApiComponent,
    IndexDlgApiComponent,
    FormDlgApiComponent,

    MenuThemeComponent,

    LoadingComponent,
    MenuListItemComponent,

    ToolbarCrudSimplesComponent,
    ToolbarCrudDlgComponent,
    ToolbarCrudFooterComponent
  ],

  providers: [
    MultilevelMenuService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class AppSharedModule {
  public static forRoot(environment: any): ModuleWithProviders<AppSharedModule> {
    return {
      ngModule: AppSharedModule,
      providers: [
        {
          provide: 'env',
          useValue: environment
        }
      ]
    };
  }

  constructor(
    @Optional()
    @SkipSelf()
    parentModule?: AppSharedModule
  ) {
    // if (parentModule) {
    //   throw new Error(
    //     'AppSharedModule já está carregada. Import it in the AppModule only'
    //   );
    // }
  }
}
