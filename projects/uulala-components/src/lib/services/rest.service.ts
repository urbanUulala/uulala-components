import { Injectable } from '@angular/core';
import { restQueries } from '../queries/rest.queries';
import { GraphService } from './graph.service';
import { LocalService } from './local.service';



@Injectable({
	providedIn: 'root'
})
export class RestService {

	constructor(
		private graphService: GraphService,
		private localService: LocalService
	) { }

	restApiTokenGet(url: string, method: string) {
		return this.graphService.execQuery(restQueries.REST_API,
			{
				url,
				token: this.localService.getValue('token'),
				method,
				inputs: '',
				methodtype: 0
			});
	}

	restApiTokenPost(url: string, method: string, inputs: string) {
		return this.graphService.execQuery(restQueries.REST_API,
			{
				url,
				token: this.localService.getValue('token'),
				method,
				inputs,
				methodtype: 1
			});
	}

	restApiTokenPut(url: string, method: string, inputs: string) {
		return this.graphService.execQuery(restQueries.REST_API,
			{
				url,
				token: this.localService.getValue('token'),
				method,
				inputs,
				methodtype: 2
			});
	}

	restApiTokenDelete(url: string, method: string, inputs: string) {
		return this.graphService.execQuery(restQueries.REST_API,
			{
				url,
				token: this.localService.getValue('token'),
				method,
				inputs,
				methodtype: 3
			});
	}

}

