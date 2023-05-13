import { Inject, Injectable } from '@angular/core';
import {
  EtherNetworkService,
  EtherWalletService,
  formatEther,
  formatGwei,
  TEtherBigNumber,
  TEtherNetwork
} from '@ashetm/ng-ether';
import {
  BehaviorSubject,
  combineLatest,
  interval,
  map,
  NEVER,
  Observable,
  Subject
} from 'rxjs';
import {
  distinctUntilChanged,
  filter,
  switchMap,
  take,
  tap
}from 'rxjs/operators';

import { ETransactionStatus } from './app.enum';
import { APP_TOKEN_CHAIN_ID } from './app.token';

import { SharedContractService } from './shared';


@Injectable()
export class AppService {

  private readonly _isConnectedSubjectApp: Subject<boolean>
    = new BehaviorSubject<boolean>(false);
  private readonly _isTransactionPendingApp: BehaviorSubject<ETransactionStatus>
    = new BehaviorSubject<ETransactionStatus>(ETransactionStatus.READY);

  readonly accountApp$: Observable<string> = this._etherWalletservice.account$;
  readonly balanceApp$: Observable<string>
    = this._etherWalletservice.balance$
      .pipe(map((balance: TEtherBigNumber): string => formatEther(balance)));
  readonly gasFeeApp$: Observable<any>
    = this._etherNetworkService.gasFee$
      .pipe(map((gasFee: TEtherBigNumber): string => formatGwei(gasFee)));
  readonly isAppropriateNetworkApp$: Observable<boolean>
    = this._etherNetworkService.network$
      .pipe(map(({
        chainId
      }: TEtherNetwork) => this._chainId === chainId));
  readonly isConnectedApp$: Observable<boolean> = this._isConnectedSubjectApp;
  readonly isTransactionPendingApp$: Observable<ETransactionStatus>
    = this._isTransactionPendingApp;
  readonly launchPadBalanceApp$: Observable<number>
    = this.balanceApp$.pipe(switchMap((_: string) =>
      this._sharedContractService.launchPadBalance()));
  readonly symbolApp$: Observable<string>
    = this.isConnectedApp$.pipe(switchMap((isConnected: boolean) =>
      isConnected ? this._sharedContractService.symbol() : NEVER));
  readonly totalSupplyApp$: Observable<number>
    = this.isConnectedApp$.pipe(switchMap((isConnected: boolean) =>
      isConnected ? this._sharedContractService.totalSupply() : NEVER));

  readonly balanceOfApp$: Observable<number>
    = this.accountApp$.pipe(
      switchMap((account: string) => {
        return interval(1000).pipe(switchMap((_: number) =>
          this._sharedContractService.balanceOf(account)));
      }),
      distinctUntilChanged()
    );

  readonly circulationSupplyApp$: Observable<number>
    = combineLatest([
      this.totalSupplyApp$,
      this.launchPadBalanceApp$
    ]).pipe(map(([
      totalSupply,
      circulationSupply
    ]: [
      number,
      number
    ]) => totalSupply - circulationSupply));

  get tokenApp(): number {
    return 4;
  }

  constructor(
    @Inject(APP_TOKEN_CHAIN_ID)
      private readonly _chainId: number,
    private readonly _etherNetworkService: EtherNetworkService,
    private readonly _etherWalletservice: EtherWalletService,
    private readonly _sharedContractService: SharedContractService,
  ) { }

  checkSession(): void {
    this._etherWalletservice.onDisconnect(() => {
      this._isConnectedSubjectApp.next(false);
    });
    this._etherWalletservice.onConnect((isConnected: boolean) => {
      this._isConnectedSubjectApp.next(isConnected);
    });
  }

  switchToTestnet(): void {
    this._etherNetworkService.switchNetwork(this._chainId);
  }

  connectWallet(): void {
    this._etherWalletservice.connectWallet()
      .subscribe();
  }

  getSomeTokens(): void {
    this._isTransactionPendingApp.pipe(
      filter((isTransactionPending: ETransactionStatus) => isTransactionPending === ETransactionStatus.PENDING),
      switchMap((_: ETransactionStatus) => this._sharedContractService.getSomeTokens(this.tokenApp)),
      tap((_: any) => this._isTransactionPendingApp.next(ETransactionStatus.PROCCESSING)),
      switchMap((trx: any) => trx.wait()),
      take(1)
    ).subscribe({
      complete: () => this._isTransactionPendingApp.next(ETransactionStatus.READY),
      next: console.warn
    });
    this._isTransactionPendingApp.next(ETransactionStatus.PENDING);
  }

}
// presencesoft-aura-token-write=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
// presencesoft-aura-token-read=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
