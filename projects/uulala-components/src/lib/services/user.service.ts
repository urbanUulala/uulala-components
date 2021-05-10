import { Injectable } from '@angular/core';
import { GraphService } from './graph.service';
import { LocalService } from './local.service';
import { userQueries } from '../queries/user.queries'
import { map } from 'rxjs/operators';
import { CompanyModel } from '../models/getters/company.model';


export type InfoModuleUser = 'general' | 'physical_cards' | 'virtual_cards';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private graphService  : GraphService,
    private localService  : LocalService
  ) { }

  getUserByField(field: string, id: string ) {
    return this.graphService.execQuery(
      userQueries.GET_USER_BY_FIELD,
      {
        token: this.localService.getValue( 'token'),
        field,
        id
      }
    ).pipe(
      map( result => ({
        ...result.data['getUsersByField'][0],
        usersProfile: {
          ...result.data['getUsersByField'][0].usersProfile[0],
          accounts:{
            ...result.data['getUsersByField'][0].usersProfile[0].accounts,
            address: {
              ...result.data['getUsersByField'][0].usersProfile[0].accounts.address[0]
            },
            kyc:{
              ...result.data['getUsersByField'][0].usersProfile[0].accounts.kyc[0]
            },
            bankInformation:{
              ...result.data['getUsersByField'][0].usersProfile[0].accounts.bankInformation[0]
            }
          }
        }
      }))
    )
  }

  getUserByFieldModule( infoModule: InfoModuleUser = 'general' )  {
    return this.graphService.execQuery(
      this.getUserQuery(infoModule),
      {
        token: this.localService.getValue( 'token'),
        field: 'id',
        id: this.localService.getValue('uid')
      }
    ).pipe(
      map( result => (this.getResultObjectModule(infoModule, result)))
    )
  }

  getResultObjectModule(infoModule: InfoModuleUser, result:any) {
    console.log('physical cards', result);
    switch (infoModule) {
      case 'physical_cards':
        return result.data['getUsersByField'][0].physicalCards
      case 'virtual_cards':
        return result.data['getUsersByField'][0].virtualCards
      default:
        break;
    }
    
  }

  private getUserQuery(infoModule: InfoModuleUser) {
    switch (infoModule) {
      case 'physical_cards':
        return userQueries.GET_USER_PHYSICAL_CARDS
      case 'virtual_cards':
        return userQueries.GET_USER_VIRTUAL_CARDS
      default:
        return userQueries.GET_USER_BY_FIELD;
    }
  }

  getUserByUuid( uuid: string) {
    return this.graphService.execQuery(
      userQueries.GET_USER_INFO_UUID,
      {
        token: this.localService.getValue( 'token'),
        uuid
      }
    ).pipe(
      map( result => result.data['getUserInfoUuid'] ))
  }

  getUserDevices() {
    return this.graphService.execQuery(
      userQueries.GET_USERS_DEVICE,
      {
        token: this.localService.getValue( 'token'),
        field: 'id',
        id: this.localService.getValue( 'uid' )
      }
    ).pipe(
      map(result => result.data['getUsersByField'][0].devices)
    )
  }

  deleteUserDevice(id: string) {
    return this.graphService.execQuery(
      userQueries.DELETE_USER_DEVICE,
      {
        token: this.localService.getValue( 'token'),
        id
      }
    )
  }


  getUserCompanies(filter: string = '')  {
    return this.graphService.execQuery(
      userQueries.GET_USER_COMPANIES,
      {
        token: this.localService.getValue( 'token' ),
        filter
      }
    ).pipe(
      map(result => {
        let companies: CompanyModel[] = [];
        result.data['getUserCompanies'].forEach(company => {
          companies.push(company.company)
        });
        return companies;
      })
    )
  }


  getPayrollTypes(filter: string = '') {
    return this.graphService.execQuery(
      userQueries.GET_PAYROLL_TYPES_USER,
      {
        token: this.localService.getValue( 'token' ),
        filter
      }
    ).pipe(
      map(result => result.data['getPayrollTypes'])
    )

  }
}
