import { Injectable } from '@angular/core';

// Rxjs
import { map } from 'rxjs/operators';

// Queries
import { acumulatedQueries } from '../queries/acumulated.queries'

// Services
import { GraphService } from './graph.service';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root'
})
export class AcumulatedService {

  constructor(
    private graphService: GraphService,
    private localService: LocalService
    ) { }

  getAnualBalances(year: number) {
    return this.graphService.execQuery(
      acumulatedQueries.GET_ANUAL_BALANCES,
      {
        token: this.localService.getValue( 'token' ),
        startyear:  year,
        endyear: year
      }
    ).pipe(
      map(result => result.data['getAnnualBalance'])
    )
  }
}