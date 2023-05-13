import { ContractInjectable, ACustomContract, TEtherBigNumber } from '@ashetm/ng-ether';
import { from as fromRxjs, map, Observable } from 'rxjs';


@ContractInjectable()
export class SharedContractService extends ACustomContract {

  balanceOf(address: string): Observable<number> {
    return fromRxjs(this.contract['balanceOf'](address) as Promise<TEtherBigNumber>)
      .pipe(map((decimals: TEtherBigNumber) => decimals.toNumber()));
  }

  decimals(): Observable<number> {
    return fromRxjs(this.contract['decimals']() as Promise<number>);
  }

  getSomeTokens(token: number): Observable<any> {
    return fromRxjs(this.contract['getSomeTokens'](token, {
      gasLimit: 60000
    }) as Promise<any>);
  }

  launchPadBalance(): Observable<number> {
    return fromRxjs(this.contract['launchPadBalance']() as Promise<TEtherBigNumber>)
      .pipe(map((launchPadBalance: TEtherBigNumber) => launchPadBalance.toNumber()));
  }

  symbol(): Observable<string> {
    return fromRxjs(this.contract['symbol']() as Promise<string>);
  }

  totalSupply(): Observable<number> {
    return fromRxjs(this.contract['totalSupply']() as Promise<TEtherBigNumber>)
      .pipe(map((decimals: TEtherBigNumber) => decimals.toNumber()));
  }

}
