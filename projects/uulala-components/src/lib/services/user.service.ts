import { Injectable } from '@angular/core';
import { GraphService } from './graph.service';
import { LocalService } from './local.service';
import { userQueries } from '../queries/user.queries'
import { map } from 'rxjs/operators';
import { CompanyModel } from '../models/getters/company.model';


export type InfoModuleUser =
  'general' |
  'physical_cards' |
  'virtual_cards' |
  'all_cards' |
  'basic';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private graphService: GraphService,
    private localService: LocalService
  ) { }

  getUserByField(field: string, id: string) {
    return this.graphService.execQuery(
      userQueries.GET_USER_BY_FIELD,
      {
        token: this.localService.getValue('token'),
        field,
        id
      }
    ).pipe(
      map(result => {

        return this.getResultObjectModule('general', result);
      })
    )
  }

  getUserByFieldModuleAndId(id: string, infoModule: InfoModuleUser = 'general') {
    return this.graphService.execQuery(
      this.getUserQuery(infoModule),
      {
        token: this.localService.getValue('token'),
        field: 'id',
        id
      }
    ).pipe(
      map(result => (this.getResultObjectModule(infoModule, result)))
    )
  }

  getUserByFieldModule(infoModule: InfoModuleUser = 'general') {
    return this.graphService.execQuery(
      this.getUserQuery(infoModule),
      {
        token: this.localService.getValue('token'),
        field: 'id',
        id: this.localService.getValue('uid')
      }
    ).pipe(
      map(result => (this.getResultObjectModule(infoModule, result)))
    )
  }

  getResultObjectModule(infoModule: InfoModuleUser, result: any) {
    console.log('physical cards', result);
    switch (infoModule) {
      case 'physical_cards':
        return result.data['getUsersByField'][0].physicalCards
      case 'virtual_cards':
        return result.data['getUsersByField'][0].virtualCards
      case 'all_cards':
        return {
          physical: result.data['getUsersByField'][0].physicalCards,
          virtual: result.data['getUsersByField'][0].virtualCards
        }
      case 'basic':
        return {
          ...result.data['getUsersByField'][0].usersProfile[0].accounts
        }
      default:
        return {
          ...result.data['getUsersByField'][0],
          clients: {
            ...result.data['getUsersByField'][0].clients[0]
          },
          usersProfile: {
            ...result.data['getUsersByField'][0].usersProfile[0],

            accounts: {
              ...result.data['getUsersByField'][0].usersProfile[0].accounts,
              address: {
                ...result.data['getUsersByField'][0].usersProfile[0].accounts.address[0]
              },
              kyc: {
                ...result.data['getUsersByField'][0].usersProfile[0].accounts.kyc[0]
              },
              bankInformation: {
                ...result.data['getUsersByField'][0].usersProfile[0].accounts.bankInformation[0]
              }
            }
          }
        }
        break;
    }

  }

  private getUserQuery(infoModule: InfoModuleUser) {
    switch (infoModule) {
      case 'physical_cards':
        return userQueries.GET_USER_PHYSICAL_CARDS
      case 'virtual_cards':
        return userQueries.GET_USER_VIRTUAL_CARDS
      case 'all_cards':
        return userQueries.GET_ALL_CARDS
      case 'basic':
        return userQueries.GET_USER_BASIC_INFO
      default:
        return userQueries.GET_USER_BY_FIELD;
    }
  }

  getUserByUuid(uuid: string) {
    return this.graphService.execQuery(
      userQueries.GET_USER_INFO_UUID,
      {
        token: this.localService.getValue('token'),
        uuid
      }
    ).pipe(
      map(result => result.data['getUserInfoUuid']))
  }

  getUserDevices() {
    return this.graphService.execQuery(
      userQueries.GET_USERS_DEVICE,
      {
        token: this.localService.getValue('token'),
        field: 'id',
        id: this.localService.getValue('uid')
      }
    ).pipe(
      map(result => result.data['getUsersByField'][0].devices)
    )
  }

  deleteUserDevice(id: string) {
    return this.graphService.execQuery(
      userQueries.DELETE_USER_DEVICE,
      {
        token: this.localService.getValue('token'),
        id
      }
    )
  }


  getUserCompanies(filter: string = '') {
    return this.graphService.execQuery(
      userQueries.GET_USER_COMPANIES,
      {
        token: this.localService.getValue('token'),
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
        token: this.localService.getValue('token'),
        filter
      }
    ).pipe(
      map(result => result.data['getPayrollTypes'])
    )

  }
  setFile(filename:string, base64:string){
    return this.graphService.execMutation(userQueries.SETFILE,{
      token: this.localService.getValue('token'),
      fileName: filename,
      file64: base64
    }).pipe(
      map((result)=>{
        return result.data['setFile'];
      }
      )
    );
  }
}
