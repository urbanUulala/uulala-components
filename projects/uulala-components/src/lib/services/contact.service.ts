import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { LocalService } from './local.service';
import { GraphService } from './graph.service';
import { contactQueries } from '../queries/contact.queries';


@Injectable({
	providedIn: 'root'
})
export class ContactService {



	//Subscribes
	subscriptionsArray: Subscription[] = [];

	constructor(
		private localService: LocalService,
		private graphService: GraphService
	) { }

	setMessageProcess(email: string, subject: string, message: string, clientId: string, clientName: string, clientPhone:string, clientCompany:string, template:string) {
		
		let token: string = this.localService.getValue('token');
		let localLanguage = this.localService.getValue('language');

		return this.graphService.execQuery(
			contactQueries.SET_MESSAGE_PROCESS,
			{
				token,
				"process": {
					"module": "12",
					"process": "120001",
					"key": "",
					"description": "Mensaje de soporte",
					"parameters": [
						{
							"name": "emailUser",
							"value": email ? email : ""
						},
						{
							"name": "template",
							"value": `${template}_${localLanguage === 'es' ? "es_mx" : "en_us"}` 
						},
						{
							"name": "subject",
							"value": subject || ""
						},
						{
							"name": "message",
							"value": message || ""
						},
						{
							"name": "param1",
							"value": message || ""
						},
						{
							"name": "param2",
							"value": email || ""
						},
						{
							"name": "param3",
							"value": clientId || ""
						},
						{
							"name": "param4",
							"value": clientName || ""
						},
						{
							"name": "param5",
							"value": clientPhone || ""
						},
						{
							"name": "param6",
							"value": clientCompany || ""
						}
					]
				}
			}
		).pipe(
			map(result => result.data['setMessageProcess'])
		)
	}
	setMessageProcessFile(email: string, file: string, fileName: string, clientId: string, clientName: string, clientPhone:string, clientCompany:string) {
		console.log('fileName', fileName);
		let token: string = this.localService.getValue('token');
		let localLanguage = this.localService.getValue('language');

		return this.graphService.execQuery(
			contactQueries.SET_MESSAGE_PROCESS,
			{
				token,
				"process": {
					"module": "12",
					"process": "120001",
					"key": "",
					"description": "Mensaje de soporte",

					"parameters": [
						{
							"name": "emailUser",
							"value": email ? email : ""
						},
						{
							"name": "template",
							"value": localLanguage === 'es' ? "user_template_dispute_client_es" : "user_template_dispute_client_en"
						},
						{
							"name": "fileName",
							"value": fileName || ""
						},
						{
							"name": "urlBucket",
							"value": file || ""
						},
						{
							"name": "param1",
							"value": file || ""
						},
						{
							"name": "param2",
							"value": email || ""
						},
						{
							"name": "param3",
							"value": clientId || ""
						},
						{
							"name": "param4",
							"value": clientName || ""
						},
						{
							"name": "param5",
							"value": clientPhone || ""
						},
						{
							"name": "param6",
							"value": clientCompany || ""
						}
					]
				}
			}
		).pipe(
			map(result => result.data['setMessageProcess'])
		)
	}

}
