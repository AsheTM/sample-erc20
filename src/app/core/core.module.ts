import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ETHER_TOKEN } from '@ashetm/ng-ether';

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
      providers: [
        {
          provide: APP_TOKEN_CHAIN_ID,
          useValue: chainId
        }, {
          provide: APP_INITIALIZER,
          useFactory: (ether: any) => {
            if(!ether?.isMetaMask) {
              const element: HTMLElement = document.createElement('kbd');

              element.textContent = 'Please install Metamask wallet in your browser, and then reload the page!';
              element.style.fontSize = '1.1rem';
              element.style.padding = '8px 16px';
              document.querySelector('body')
                ?.prepend(element);

              console.warn('Metamask wallet is not installed in your browser!');
            }

            return () => { };
          },
          deps: [ETHER_TOKEN],
          multi: true
        }
      ]
    };
  }

}
