import { CommonModule, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { LOCALE_ID, ModuleWithProviders, NgModule } from '@angular/core';
import { EtherModule } from '@ashetm/ng-ether';

import { ASharedRootModule } from './shared-root.class';
import { TSharedConfigurationRoot } from './shared.type';


registerLocaleData(localeFr);

@NgModule()
export class SharedModule {

  static forRoot({
    abi,
    addressContract,
    networkId
  }: TSharedConfigurationRoot): ModuleWithProviders<ASharedRootModule> {
    @NgModule({
      exports :[
        CommonModule,
        EtherModule
      ],
      imports: [
        CommonModule,
        EtherModule.forRoot({
          abi,
          addressContract,
          // networkId
        })
      ]
    })
    class SharedRootModule extends ASharedRootModule { }

    return {
      ngModule: SharedRootModule,
      providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }]
    };
  }

}
