import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TUI_SANITIZER, TuiAutoFocusModule } from '@taiga-ui/cdk';
import {
  iconsPathFactory,
  TUI_ICONS_PATH,
  TuiButtonModule,
  TuiDialogModule,
  TuiNotificationsModule,
  TuiRootModule,
  TuiSvgService,
} from '@taiga-ui/core';
import * as icons from '@taiga-ui/icons';
import { TuiAvatarModule } from '@taiga-ui/kit';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    TuiRootModule,
    TuiNotificationsModule,
    TuiDialogModule,
    TuiButtonModule,
    TuiAutoFocusModule,
    TuiAvatarModule,

    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: 'environment', useValue: environment },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: TUI_ICONS_PATH,
      useValue: iconsPathFactory('assets/taiga-ui/icons/'),
    },
    {
      provide: TUI_SANITIZER,
      useClass: NgDompurifySanitizer,
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [TuiSvgService],
      useFactory: iconsWorkaround,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
// A workaround because StackBlitz does not support assets
export function iconsWorkaround(service: TuiSvgService): Function {
  return () => service.define({ ...icons, tuiCoreIcons: '', tuiKitIcons: '' });
}
