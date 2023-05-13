import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TCoreConfigurationRoot } from './core.type';

import { APP_TOKEN_CHAIN_ID } from '../app.token';


@NgModule({
  exports: [
    BrowserModule,
    CommonModule
  ],
  imports: [
    BrowserModule,
    CommonModule
  ]
})
export class CoreModule {

  static forRoot({
    chainId
  }: TCoreConfigurationRoot): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [{
        provide: APP_TOKEN_CHAIN_ID,
        useValue: chainId
      }]
    };
  }

}
