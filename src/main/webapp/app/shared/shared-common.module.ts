import { NgModule } from '@angular/core';

import { GatewayAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [GatewayAppSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [GatewayAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class GatewayAppSharedCommonModule {}
