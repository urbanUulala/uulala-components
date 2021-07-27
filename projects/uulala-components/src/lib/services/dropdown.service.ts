import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';
import { SelectListItem } from '../models/configurations';
import { GraphService } from '../services/graph.service';
import { LocalService } from '../services/local.service';
import { CountryModel } from '../models/getters/country.model';
import { GetComboInputType } from '../models/setters/getComboInputType';
import { GetUserComboInputType } from '../models/setters/getUserComboInputType';


const dropdownQueries = {
  GET_DATA: gql`
  query ($id:String!,$languaje:Int!){
    getCombo(id:$id, languaje:$languaje){
       value
       description
    }
  }
  `,
  GET_COUNTRIES: gql`
  query {
    getCountries{
       countryNumber
       englishName
       iso2
       iso3
       iso4217
       currency
       phoneCode
       status
       emoji
       icon
       capital
    }
  }
  `,
  GET_GENDER: gql`
  query ($token:String!,$id:String!,$languaje:Int!){
    getUserCombo(token:$token,id:$id, languaje:$languaje){
       value
       description
    }
  }
  `,
  GET_TYPE_IDENTIFICATION: gql`
  query ($token:String!,$id:String!,$languaje:Int!){
    getUserCombo(token:$token,id:$id, languaje:$languaje){
       value
       description
    }
  }
  `,
  GET_CRYPTO_CURRENCY: gql`
  query ($token:String!,$filter:String!)
	{  
		getCryptoCurrency(token:$token,filter:$filter)
		{
				id
				currency
				name
				icon
				status			        
		}
	}
  `,
}

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(
    private graphService: GraphService,
    private localService: LocalService
  ) { }

  getData(id: string) {
    const inputType: GetComboInputType = new GetComboInputType(id, this.localService.getApiLanguaje().toString());
    return this.graphService.execQuery(
      dropdownQueries.GET_DATA,
      {
        ...inputType
      }
    ).pipe(
      map( result => result.data['getCombo'])
    );
  }

  getCountries() {
    return this.graphService.execQuery(
      dropdownQueries.GET_COUNTRIES, {}
    )
  }

  getCryptoCurrency() {
    const token = this.localService.getValue('token');
    return this.graphService.execQuery(
      dropdownQueries.GET_CRYPTO_CURRENCY, 
      {
        token,
        filter:''
      }
    )
  }

  getCountyCodes() {
    return this.getCountries()
    .pipe(map( result => {
    //console.log('result',result);
      let output: SelectListItem[] = [];
      (result.data['getCountries'] as CountryModel[]).forEach(country => {
        output.push(
          {
            value: country.phoneCode,
            description: `${country.englishName} +${country.phoneCode}`
          }
        )
      });
      return output;
    }))
  }

  getGender() {
    const inputType: GetUserComboInputType = new GetUserComboInputType(this.localService.getValue('token'),'GENDER', this.localService.getApiLanguaje().toString());
    return this.graphService.execQuery(
      dropdownQueries.GET_GENDER,
      {
        ...inputType
      }
    ).pipe(
      map( result => result.data['getUserCombo'])
    );

  }

  getTypeIdentification(countryCode: string) {
    const inputType: GetUserComboInputType = new GetUserComboInputType(this.localService.getValue('token'),`Identificacion-${countryCode}`, this.localService.getApiLanguaje().toString());
    return this.graphService.execQuery(
      dropdownQueries.GET_TYPE_IDENTIFICATION,
      {
        ...inputType
      }
    ).pipe(
      map( result => result.data['getUserCombo'])
    );

  }

  getCountyNames() {
    return this.getCountries()
    .pipe(map( result => {
    //console.log('result',result);
      let output: SelectListItem[] = [];
      (result.data['getCountries'] as CountryModel[]).forEach(country => {
        output.push(
          {
            value: country.englishName.toUpperCase(),
            description: `${country.englishName}`
          }
        )
      });
      return output;
    }))

  }

  getCryptoCurrencyNames() {
    return this.getCryptoCurrency()
    .pipe(map( result => {
      let output: SelectListItem[] = [];
      (result.data['getCryptoCurrency']).forEach(currency => {
        output.push(
          {
            value: `${currency.name}`,
            description: `${currency.name}`
          }
        )
      });
      return output;
    }))

  }
}
