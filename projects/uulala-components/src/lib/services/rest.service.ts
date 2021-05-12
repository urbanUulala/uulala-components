import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GraphService } from 'uulala-components/projects/uulala-components/src/lib/services/graph.service';
import { restQueries } from 'uulala-components/projects/uulala-components/src/lib/queries/rest.queries'


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

