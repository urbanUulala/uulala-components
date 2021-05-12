import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { restQueries } from '../queries/rest.queries';
import { GraphService } from './graph.service';



@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(
		private graphService: GraphService,
  ) { }

  restApiCrypto(method:string, inputs:string, methodtype:number,url:string,user:string,key:string ) {
		return this.graphService.execQuery(restQueries.REST_API,
			{
					url: url,
					user: user,
					key: key,
					method,
					inputs,
					methodtype
			});
	}

}

