import { Injectable } from '@angular/core';
import { SystemLanguajes } from '../types/system.languages';

export type LocalStorageKeys =
  'token'     |
  'user'      |
  'device_id' |
  'device_id_rsa' |
  'language'  |
  'uid'       |
  'pin'       |
  'code'      |
  'phone'     |
  'session'   |
  'blocked'   |
  'society'   |
  'sessionBarStatus';


  export type UulalaSites =
  'bank' |
  'panel' |
  'wallet' |
  'payroll';

 const uulalaUrlSites = {
    bank: 'urlBank',
    panel: 'V00002',
    wallet: 'V00003',
    payroll: 'http://localhost:58760/access'
  }

const systemKeyRedirects = {
  payroll: '96D0205A001056DEA02F06B11533F4AA'
}
const defaultLanguajeValues = {
  es: {
    apiLanguaje: 2,
    phoneCode: '52'
  },
  en: {
    apiLanguaje: 3,
    phoneCode: '1'
  }
}
const keyValues = {
  token         : 'V00001',
  user          : 'V00002',
  device_id     : 'V00003',
  language      : 'V00004',
  uid           : 'V00005',
  blocked       : 'V00006',
  society       : 'V00007',
  device_id_rsa : 'V00008',
  sessionBarStatus: 'V00009',

  //Temporal values
  pin           : 'T00001',
  code          : 'T00002',
  phone         : 'T00003',
  session       : 'T00004',

}

const products = [
  {
    id: 0,
    translate: 'products.none'
  } ,
  {
    id: 1,
    translate: 'products.payroll'
  } ,
 {
    id: 2,
    translate: 'products.accountsBalance'
  } ,
 {
    id: 3,
    translate: 'products.banking'
  } ,
 {
    id: 4,
    translate: 'products.dispersion'
  } ,
 {
    id: 5,
    translate: 'products.accounts'
  } ,
 {
    id: 6,
    translate: 'products.wallet'
  }
]



@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  getValue(key: LocalStorageKeys) {
    if( !( this.existKey( key ) )) return '';
    return localStorage[keyValues[key]];
  }

  setValue( key: LocalStorageKeys, value:string ) {
    // console.group('local storege set')
    // console.log('set value', value, ' in the key ', key);
    // console.groupEnd();
    localStorage.setItem(keyValues[key], value);
  }

  setLanguaje(languaje: SystemLanguajes) {
    this.setValue( 'language', languaje)
  }

  removeItem(key: LocalStorageKeys) {
    localStorage.removeItem(keyValues[key])
  }

  getApiLanguaje() {
    return defaultLanguajeValues[this.getValue( 'language' )].apiLanguaje;
  }

  getDefaultPhoneCode() {
    return defaultLanguajeValues[this.getValue( 'language' )].phoneCode;
  }

  getSystemNameTranslateById(productId:Number) {
    let productFilter = products.filter(product => product.id === productId)
    if(productFilter.length == 0) return '';

    return productFilter[0].translate;
  }

  removeTemporalData() {
    Object.keys(localStorage).forEach(element => {
      if(element.substring(0,3) === 'T00') localStorage.removeItem(element);
    });
  }

  existKey(key: LocalStorageKeys) {
    return keyValues[key] in window.localStorage;
  }

  getUrlSite( site: UulalaSites ) {
    return uulalaUrlSites[site];
  }

  getUrlSesionForSystem(site: string) {
    switch (site) {
      case systemKeyRedirects.payroll:
        return this.getPayrollSesionUrl();
      default:
        break;
    }
  }

  getPayrollSesionUrl() {
    let device_id: string = this.getValue( 'device_id' );
    device_id = device_id.replace('/', 'diagonal');

    let url: string = `${this.getUrlSite( 'payroll' )}/${this.getValue( 'token' )}/${this.getApiLanguaje()}/${device_id}`;
    return url;
  }

  getSiteKey( site: UulalaSites ) {
    return systemKeyRedirects[site];
  }
}
