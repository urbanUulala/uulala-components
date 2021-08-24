import { Injectable } from '@angular/core';

// Rxjs
import { map } from 'rxjs/operators';
import { walletConstants } from '../constants/wallet.constants';
import { pointsConstants } from '../constants/points.constants';
import { pointsQueries } from '../queries/points.queries';


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
       return this.getPoolBalance(id, pointsConstants.POOLS.COMMISSION);
    }

    getLiquidPointsBalance( id:number ) {
        return this.getPoolBalance(id, pointsConstants.POOLS.LIQUIDITY);
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

    

    setLiquidityCommissions(address:string, amount: number) {
        return this.setTransactionBetweenInternalPools(address, pointsConstants.POOLS.COMMISSION, pointsConstants.POOLS.LIQUIDITY, amount, `Liquidity points for ${address}`);
    }

    private setTransactionBetweenInternalPools(address:string, withdrawalPool: number, depositPool: number, amount: number, note:string) {
        return this.graphService.execMutation(
            pointsQueries.CREATE_POOL_TRANSACTION_BY_TOKEN_ADDRESS,
            {
                token: this.localService.getValue( 'token' ),
                withdrawalAddress:  address,
                withdrawalPool,
                depositAddress: address, 
                depositPool, 
                amount,
                transactionDate:  new Date(),
                note
            }
        )
    }
    
    setLiquidityPool(address:string, amount:number, depositClient: number) {
        return this.setTransactionPointsToClientWallet(address, pointsConstants.POOLS.LIQUIDITY, amount / 0.1, depositClient, walletConstants.POOLS.PENDING, amount, `Sent points to wallet for ${address}`)
    }


    private setTransactionPointsToClientWallet(address:string, withdrawalPool: number, amountPoints: number, depositClient: number, depositPool: number, amountClient: number, note: string) {
        return this.graphService.execMutation(
            pointsQueries.CREATE_POOL_TRANSACTION_BY_TOKEN_ADDRESS_TO_CLIENT,
            {
                token: this.localService.getValue( 'token' ),
                withdrawalAddress:  address,
                withdrawalPool,
                amountAddress: amountPoints,
                depositClient,
                depositPool,
                amountClient,
                transactionDate: new Date,
                note
            }
        )
    }


   
  
}