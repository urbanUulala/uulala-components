import { Injectable } from '@angular/core';

// Rxjs
import { map } from 'rxjs/operators';
import { pointsQueries } from 'uulala-components/projects/uulala-components/src/lib/queries/points.queries';
import { parametersQueries } from '../queries/parameters.queries';


// Queries


// Services
import { GraphService } from './graph.service';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root'
})
export class PointsService {

  constructor(
    private graphService: GraphService,
    private localService: LocalService
    ) 
    { }


    getCommissionPointsBalance( id:number) {
       return this.getPoolBalance(id, 0);
    }


    private getPoolBalance(id:number, pool:number) {
        return this.graphService.execQuery(
            pointsQueries.GET_POOL_BALANCE,
            {
              token: this.localService.getValue( 'token' ),
                id,
                pool
            }
          ).pipe(
            map(result => result.data['getBalanceTokens'])
          )
    }
  
}