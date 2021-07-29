import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { LocalService } from './local.service';
import { GraphService } from './graph.service';

import { cryptoQueries } from '../queries/crypto.queries';
import { CryptoCurrencyAddress } from '../models/getters/cryptoCurrencyAddress.model';



@Injectable({
	providedIn: 'root'
})
export class CryptoService {



	//Subscribes
	subscriptionsArray: Subscription[] = [];

	constructor(
		private localService: LocalService,
		private graphService: GraphService
	) { }

	getCryptoAddress(currencyId: number) {

        return this.graphService.execQuery(
          cryptoQueries.GET_CRYPTO_ADDRESS,
          {
              token: this.localService.getValue('token'),
              currencyId
          },
          "no-cache"
        ).pipe(
          map(result => result.data['getCryptoCurrencyAddress'][0] as CryptoCurrencyAddress)
        )
    }
	

}
