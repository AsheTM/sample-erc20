import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ETransactionStatus } from './app.enum';
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AppService]
})
export class AppComponent implements OnInit {

  account$: Observable<string> = this._appService.accountApp$;
  balance$: Observable<string> = this._appService.balanceApp$;
  balanceOf$: Observable<number> = this._appService.balanceOfApp$;
  circulationSupply$: Observable<number> = this._appService.circulationSupplyApp$;
  gasFee$: Observable<string> = this._appService.gasFeeApp$;
  isAppropriateNetwork$: Observable<boolean> = this._appService.isAppropriateNetworkApp$;
  isConnected$: Observable<boolean> = this._appService.isConnectedApp$;
  isTransactionPending$: Observable<ETransactionStatus> = this._appService.isTransactionPendingApp$;
  launchPadBalance$: Observable<any> = this._appService.launchPadBalanceApp$;
  symbol$: Observable<string> = this._appService.symbolApp$;
  totalSupply$: Observable<number> = this._appService.totalSupplyApp$;

  get token(): number {
    return this._appService.tokenApp;
  }

  get transactionStatusPending(): ETransactionStatus {
    return ETransactionStatus.PENDING;
  }

  get transactionStatusProcessing(): ETransactionStatus {
    return ETransactionStatus.PROCCESSING;
  }

  get transactionStatusReady(): ETransactionStatus {
    return ETransactionStatus.READY;
  }

  constructor(private readonly _appService: AppService) { }

  ngOnInit(): void {
    this._appService.checkSession();
    this._appService.switchToTestnet();
  }

  connectWallet(): void {
    this._appService.connectWallet();
  }

  getSomeTokens(): void {
    this._appService.getSomeTokens();
  }

}
