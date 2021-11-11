import { Injectable } from '@angular/core';
import { SystemLanguajes } from '../types/system.languages';
import { SystemSitesType } from '../types/systemSites.type';

export type LocalStorageKeys =
  'token' |
  'user' |
  'device_id' |
  'device_id_rsa' |
  'language' |
  'uid' |
  'pin' |
  'code' |
  'phone' |
  'session' |
  'blocked' |
  'society' |
  'sessionBarStatus' |
  'reference' |
  'temporalS' |
  'brand' | 
  'version' |
  'company';


export type UulalaSites =
  'bank' |
  'panel' |
  'wallet' |
  'payroll' |
  'batched';


export type UulalaEnvironments = 'dev' | 'test' | 'prod' | 'staging';

const uulalaUrlSitesDev = {
  bank: 'http://localhost:4200/access',
  panel: 'http://localhost:4200/access',
  wallet: 'wallet',
  payroll: 'http://localhost:4200/access'
}

const uulalaUrlSitesTest = {
  bank: 'http://localhost:4200/access',
  panel: 'https://payroll-demo.apps-uulala.io/access',
  wallet: 'wallet',
  payroll: 'http://localhost:58760/access'
}

const uulalaUrlSitesProd = {
  bank: 'https://bank.apps-uulala.io/access',
  panel: 'https://payroll.apps-uulala.io/access',
  wallet: 'wallet',
  payroll: 'http://localhost:58760/access'
}

const systemKeyRedirects = {
  payroll: '96D0205A001056DEA02F06B11533F4AA',
  bank: 'bd5af1f610a12434c9128e4a399cef8a',
  batched: 'D2F6520849A4F012D0AF6BBD2854B0C7'
}
const defaultLanguajeValues = {
  es: {
    apiLanguaje: 2,
    systemLanguage: 'es',
    phoneCode: '52'
  },
  en: {
    apiLanguaje: 3,
    systemLanguage: 'en',
    phoneCode: '1'
  }
}
const keyValues = {
  token: 'V00001',
  user: 'V00002',
  device_id: 'V00003',
  language: 'V00004',
  uid: 'V00005',
  blocked: 'V00006',
  society: 'V00007',
  device_id_rsa: 'V00008',
  sessionBarStatus: 'V00009',
  brand: 'V00010',
  version: 'V00011',
  company: 'V00012',

  //Temporal values
  pin: 'T00001',
  code: 'T00002',
  phone: 'T00003',
  session: 'T00004',
  reference: 'T00005',
  temporalS: 'T00006'

}

const products = [
  {
    id: 0,
    translate: 'products.none'
  },
  {
    id: 1,
    translate: 'products.payroll'
  },
  {
    id: 2,
    translate: 'products.accountsBalance'
  },
  {
    id: 3,
    translate: 'products.banking'
  },
  {
    id: 4,
    translate: 'products.dispersion'
  },
  {
    id: 5,
    translate: 'products.accounts'
  },
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
    if (!(this.existKey(key))) return '';
    return localStorage[keyValues[key]];
  }

  getValueDirect(key: string) {
    if (!(this.existKeyDirect(key))) return '';
    return localStorage[key];
  }

  setValue(key: LocalStorageKeys, value: string) {
    // console.group('local storege set')
    // console.log('set value', value, ' in the key ', key);
    // console.groupEnd();
    localStorage.setItem(keyValues[key], value);
  }

  setValueDirect(key: string, value: string) {
    // console.group('local storege set')
    // console.log('set value', value, ' in the key ', key);
    // console.groupEnd();
    localStorage.setItem(key, value);
  }

  setLanguaje(languaje: SystemLanguajes) {
    this.setValue('language', languaje)
  }

  removeItem(key: LocalStorageKeys) {
    localStorage.removeItem(keyValues[key])
  }

  getApiLanguaje() {
    return defaultLanguajeValues[this.getValue('language')].apiLanguaje;
  }

  getDefaultPhoneCode() {
    return defaultLanguajeValues[this.getValue('language')].phoneCode;
  }

  getSystemNameTranslateById(productId: Number) {
    let productFilter = products.filter(product => product.id === productId)
    if (productFilter.length == 0) return '';

    return productFilter[0].translate;
  }

  removeTemporalData() {
    Object.keys(localStorage).forEach(element => {
      if (element.substring(0, 3) === 'T00') localStorage.removeItem(element);
    });
  }

  existKey(key: LocalStorageKeys) {
    return keyValues[key] in window.localStorage;
  }

  existKeyDirect(key: string) {
    return key in window.localStorage;
  }

  getUrlSite(site: UulalaSites, environment: UulalaEnvironments) {
    switch (environment) {
      case 'dev':
        return uulalaUrlSitesDev[site];
      case 'test':
        return uulalaUrlSitesTest[site];
      case 'prod':
        return uulalaUrlSitesProd[site];
    }

  }

  getUrlSesionForSystem(site: string, environment: UulalaEnvironments) {
    switch (site) {
      case systemKeyRedirects.payroll:
        return this.getPayrollSesionUrl(environment);
      case systemKeyRedirects.bank:
        return this.getBankSesionUrl(environment);
      default:
        break;
    }
  }

  getSystemByKey(key: string): SystemSitesType {
    switch (key) {
      case systemKeyRedirects.payroll:
        return 'panel'
      case systemKeyRedirects.bank:
        return 'bank'
      case systemKeyRedirects.batched:
        return 'batched'
    }

  }

  getPayrollSesionUrl(environment: UulalaEnvironments) {
    let device_id: string = this.getValue('device_id');
    device_id = device_id.replace('/', 'diagonal');

    let url: string = `${this.getUrlSite('payroll', environment)}/${this.getStorage('token')}/${this.getApiLanguaje()}/${device_id}`;
    return url;
  }

  getBankSesionUrl(environment: UulalaEnvironments) {
    let device_id: string = this.getValue('device_id');
    device_id = device_id.replace('/', 'diagonal');

    let url: string = `${this.getUrlSite('bank', environment)}/${this.getStorage('token')}/${this.getApiLanguaje()}/${device_id}`;
    return url;
  }

  getDeviceId() {
    let device_id: string = this.getValue('device_id');
    return device_id.replace('/', 'diagonal');
  }

  getSiteKey(site: UulalaSites) {
    return systemKeyRedirects[site];
  }

  getSystemLanguaje(language: number) {
    switch (language) {
      case 2: return 'es';
      case 3: return 'en';
    }
  }

  redirectToAccounts(accountsUrl: string) {
    window.open(`${accountsUrl}/login/access/${this.getStorage('token')}/${this.getValue('device_id_rsa')}/${this.getApiLanguaje()}`, '_self')
  }













































  /*  removeStorage: removes a key from localStorage and its sibling expiracy key
    params:
        key <string>     : localStorage key to remove
    returns:
        <boolean> : telling if operation succeeded
 */
  removeStorage(key: LocalStorageKeys) {
    try {
      console.log('removeStorage: ', key, keyValues[key]);
      localStorage.removeItem(keyValues[key]);
      localStorage.removeItem(`_${keyValues[key]}`);
    } catch (e) {
      console.log('removeStorage: Error removing key [' + key + '] from localStorage: ' + JSON.stringify(e));
      return false;
    }
    return true;
  }
  /*  getStorage: retrieves a key from localStorage previously set with setStorage().
    params:
        key <string> : localStorage key
    returns:
        <string> : value of localStorage key
        null : in case of expired key or failure
  */
  getStorage(key: LocalStorageKeys) : string {

    let currentDate: number = Date.now();  //epoch time, lets deal only with integer
    let expiresIn: number = 0;
    // set expiration for storage
    let expiresItem: any = localStorage.getItem(`_${keyValues[key]}`);
    if (expiresItem === undefined || expiresItem === null)  expiresIn = 0; 
    else expiresIn = +expiresItem;

    if (expiresIn < currentDate) {// Expired
      this.removeStorage(key);
      return null;
    } else {
      try {
        return localStorage.getItem(keyValues[key]);
      } catch (e) {
        console.log('getStorage: Error reading key [' + key + '] from localStorage: ' + JSON.stringify(e));
        return null;
      }
    }
  }

  getStorageType<T>(key: LocalStorageKeys) : T{

    let currentDate: number = Date.now();  //epoch time, lets deal only with integer
    let expiresIn: number = 0;
    // set expiration for storage
    let expiresItem: any = localStorage.getItem(`_${keyValues[key]}`);
    if (expiresItem === undefined || expiresItem === null) { expiresIn = 0; }
    else expiresIn = +expiresItem;

    if (expiresIn < currentDate) {// Expired
      this.removeStorage(key);
      return null;
    } else {
      try {
        var value:T = JSON.parse(localStorage.getItem(keyValues[key]));
        return value;
      } catch (e) {
        console.log('getStorage: Error reading key [' + key + '] from localStorage: ' + JSON.stringify(e));
        return null;
      }
    }
  }
  /*  setStorage: writes a key into localStorage setting a expire time
    params:
        key <string>     : localStorage key
        value <string>   : localStorage value
        expires <number> : number of seconds from now to expire the key
    returns:
        <boolean> : telling if operation succeeded
  */
  setStorageHours(key: LocalStorageKeys, value: string, expires: number = 24) {
    expires = Math.abs(expires * 60 * 60);

    return this.setStorage(key, value, expires);
  }

  setStorageMinutes(key: LocalStorageKeys, value: string, expires: number = 24) {
    expires = Math.abs(expires * 60);

    return this.setStorage(key, value, expires);
  }

  private setStorage(key: LocalStorageKeys, value: string, expires: number ) {
    // console.log('setStorage', value);
    let currentDate = Date.now();  //millisecs since epoch time, lets deal only with integer
    let schedule = currentDate + expires * 1000;
    try {
      localStorage.setItem(keyValues[key], value);
      localStorage.setItem(`_${keyValues[key]}`, schedule.toString());
    } catch (e) {
      console.log('setStorage: Error setting key [' + key + '] in localStorage: ' + JSON.stringify(e));
      return false;
    }
    return true;
  }
}
