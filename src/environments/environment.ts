// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { TEnvironment } from "./enviroment.type";

import abi from '../assets/abi.json';


export const environment: TEnvironment = {
  production: false,
  configuration: {
    core: {
      chainId: 0x5
    },
    shared: {
      abi,
      addressContract: '0x97336F30A97373438857541779a7b5A19cDEA9f6',
      networkId: 0x5
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
