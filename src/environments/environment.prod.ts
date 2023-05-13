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
      addressContract: process.env.NG_APP_CONTRACT_ADDRESS,
      networkId: 0x5
    }
  }
};
