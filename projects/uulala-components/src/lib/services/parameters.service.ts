import { Injectable } from '@angular/core';

// Rxjs
import { map } from 'rxjs/operators';
import { parametersQueries } from '../queries/parameters.queries';


// Queries


// Services
import { GraphService } from './graph.service';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root'
})
export class ParametersService {

  constructor(
    private graphService: GraphService,
    private localService: LocalService
    ) 
    { }

    getUrlAccounts() {

    }

    getParameterByCompany(filter:string, company:number) {
        return this.graphService.execQuery(
            parametersQueries.GET_PARAMETER_BY_COMPANY,
            {
              token: this.localService.getValue( 'token' ),
              filter,
              company
            }
          ).pipe(
            map(result => result.data['getParametersByCompany'])
          )
    }
  
}