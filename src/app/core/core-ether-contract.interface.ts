import { Injectable, TypeDecorator } from "@angular/core";
import { AEtherContract } from '@ashetm/ng-ether';
import { from, Observable } from "rxjs";


export type TContractFunction = ((...args: unknown[]) => Observable<unknown>) | { test?: null; };
export type TCustomContractFunction = Record<string, (...args: unknown[]) => Promise<unknown>>;


export abstract class ACustomContract {

  readonly [key: string]: TContractFunction;

  constructor(protected readonly contract: TCustomContractFunction) { }

}

function ContractInjectable(): TypeDecorator {
  return function<T extends { new (...args: any[]): ACustomContract }>(target: T): T {
    @Injectable({
      providedIn: 'root',
      useFactory: (contract: AEtherContract) => new CustomContract(contract),
      deps: [AEtherContract]
    })
    class CustomContract extends target {

      constructor(...args: any[]) {
        super(args[0]);
      }

    }

    return CustomContract;
  };
};

@ContractInjectable()
export class CustdomContract extends ACustomContract {

  test(): Observable<any> {
    return from(this.contract["decimals"]());
  }

}


// export abstract class ACoreEtherContract {
//   readonly [key: string]: (...args: any) => Observable<any>;
// }


// interface IContractInjectable {

//   (): TypeDecorator;

// }

interface T {

  new(): any;
  readonly [key: string]: (...args: any) => Observable<any>;

}

// export interface ACoreEtherContract {
//   new(): any;
//   readonly [key: string]: (...args: any) => Observable<any>;
// }
