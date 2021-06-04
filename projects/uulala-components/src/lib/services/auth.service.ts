import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// Rxjs
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';

// Services
import { GraphService } from './graph.service';
import { LocalService } from './local.service';
import { MessagesService } from './messages.service';

// Queries
import { authQueries } from '../queries/auth.queries';

// Models
import { Auth } from '../models/getters/auth.model';
import { PayrollSession } from '../models/getters/payrollSession.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private is_loged$ = new BehaviorSubject(false);
  private is_blocked$ = new BehaviorSubject(false);

  constructor(
    private graphService: GraphService,
    private localService: LocalService,
    private router: Router,
    private messagesService: MessagesService
  ) { }

  loginWithToken(token:string, language: number, id: string, utcOffsetMinutes: number) {
    this.localService.setValue( 'token', token );
    return this.graphService.execQuery(
      authQueries.GET_LOGIN_SOCIETIES,
      {
        token,
        language,
        id,
        utcOffsetMinutes
      }
    ).pipe(
      map( result => result.data['getLogginSocieties'])
    )
  }

  loginWithTokenSuccess(session: PayrollSession) {
    this.localService.setValue( 'token', session.token );
    return of(true)
  }

  isLoged() : Observable<boolean> {
    return this.is_loged$.asObservable();
  }

  isBlocked() : Observable<boolean> {
    return this.is_blocked$.asObservable();
  }

  setBlocked(status:boolean) {
    this.is_blocked$.next(status);
    return status;
  }

  setSociety(id: string) {
    let token:string = this.localService.getValue( 'token' );
    return this.graphService.execQuery(
      authQueries.GET_LOGIN,
      {
        token,
        id
      }
    ).pipe(
      map( result => result.data['getLoggin'])
    )
  }


  setLocalData(auth: Auth)  {
    // this.store.dispatch(changeStep({ step: authConstants.STEPS.IN_SESSION }))
    this.localService.setValue( 'token', auth.token );
    this.localService.setValue( 'uid' , auth.uuid);
    this.localService.setValue( 'language' , 'es');

    this.messagesService.hidePreloader();


    this.is_loged$.next(true);
    return of(auth.locked)
  }

  validateSesion() {
    let token: string = this.localService.getValue( 'token' );
    return this.graphService.execQuery(
      authQueries.VALIDATE_SESSION,
      { token }
    ).pipe(
      map( result => result.data['getValidateSession'])
    )
  }

  validatePayrollSesion() {
    let token: string = this.localService.getValue( 'token' );
    return this.graphService.execQuery(
      authQueries.VALIDATE_PAYROLL_SESSION,
      { token }
    ).pipe(
      map( result => result.data['getValidateSession'])
    )
  }

  getValidatePwd(password:string) {
    const token = this.localService.getValue('token');
    return this.graphService.execQuery(
      authQueries.GET_VALIDATE_PWD,
      {token,password}
    ).pipe(
      map( result => result.data['getValidatePwd']),
    )
  }

  setLockedToken() {
    const token = this.localService.getValue('token');

    return this.graphService.execQuery(
      authQueries.SETLOCKEDTOKEN,
      {token}
    ).pipe(
      map( result => result.data['setLockedToken']),
    )
  }

  logoutUser() {
    let token: string = this.localService.getValue('token');
    return this.graphService.execQuery(
      authQueries.LOGOUT,
      { token }
    )
  }

  logoutUserSuccess() {
    this.localService.removeItem( 'token' );
    this.localService.removeItem( 'uid' );
    this.is_loged$.next(false);
    this.router.navigate(['/access'])
    return of(true);
  }

  setSessionData(payrollType: number, company: number) {
    return this.graphService.execMutation(
      authQueries.SET_LOGIN_INPUT,
      { 
        token: this.localService.getValue( 'token' ),
        logginInfo: {
          company,
          payrollType
        }
       }
    )
  }

  // Menu
  getUserMenu() {
    return this.graphService.execQuery(
      authQueries.GET_USER_MENU,
      { 
        token: this.localService.getValue( 'token' ),
      }
    ).pipe(
      map(result => result.data['getUserMenus'])
    )
  }
   //Redirections
   getUrlAccounts(environment:string,company:number) {
    console.log(environment,company);
    return this.graphService.execQuery(
      authQueries.GETURLACCOUNTS,
      {environment,company}
    ).pipe(
      map( result => result.data['getUrlAccounts'])
    )
  }
}
