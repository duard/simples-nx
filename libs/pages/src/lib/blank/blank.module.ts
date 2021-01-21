import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TuiAutoFocusModule } from '@taiga-ui/cdk';
import {
  TuiButtonModule,
  TuiLinkModule,
  TuiHintControllerModule,
  TuiDataListModule,
  TuiTextfieldControllerModule,
  TuiGroupModule,
} from '@taiga-ui/core';
import { TUI_SANITIZER } from '@taiga-ui/cdk';
import {
  TuiAvatarModule,
  TuiDataListWrapperModule,
  TuiInputDateTimeModule,
  TuiIslandModule,
  TuiMultiSelectModule,
  TuiTabsModule,
} from '@taiga-ui/kit';

import * as icons from '@taiga-ui/icons';

import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { TuiAxesModule, TuiBarChartModule, TuiLineChartModule, TuiRingChartModule } from '@taiga-ui/addon-charts';
import { TuiMoneyModule } from '@taiga-ui/addon-commerce';
import { PolymorpheusModule } from '@tinkoff/ng-polymorpheus';

import { BlankRoutingModule } from './blank-routing.module';
import { BlankComponent } from './blank.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, // Modules for your app modules where you use our components
    TuiLinkModule,
    TuiButtonModule,
    TuiIslandModule,
    TuiMultiSelectModule,
    TuiInputDateTimeModule,
    TuiTabsModule,
    TuiAxesModule,
    TuiLineChartModule,
    TuiBarChartModule,
    TuiRingChartModule,
    TuiHintControllerModule,
    TuiTextfieldControllerModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    TuiGroupModule,
    TuiMoneyModule,
    PolymorpheusModule,
    TuiButtonModule,
    TuiAutoFocusModule,
    TuiAvatarModule,
    BlankRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [BlankComponent],
})
export class BlankModule {}
