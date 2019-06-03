import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GatewayAppSharedLibsModule, GatewayAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [GatewayAppSharedLibsModule, GatewayAppSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [GatewayAppSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GatewayAppSharedModule {
  static forRoot() {
    return {
      ngModule: GatewayAppSharedModule
    };
  }
}
