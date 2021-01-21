import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HelloWorldComponent } from './hello-world.component';

import { NxRoutingModule } from './nx-routing.module';
import { NxComponent } from './nx.component';

@NgModule({
  imports: [
    CommonModule,
    NxRoutingModule,
    // MaterialModule,
    // AppSharedModule,
    // FlexLayoutModule,
    // AppStoreModule,
  ],
  declarations: [NxComponent, HelloWorldComponent],
})
export class NxModule {}
