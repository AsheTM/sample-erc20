import { TEnvironment } from "./enviroment.type";

import abi from '../assets/abi.json';


export const environment: TEnvironment = {
  production: false,
  configuration: {
    core: {
      chainId: 5
    },
    shared: {
      abi,
      addressContract: '0x97336F30A97373438857541779a7b5A19cDEA9f6',
      networkId: 0x5
    }
  }
};
