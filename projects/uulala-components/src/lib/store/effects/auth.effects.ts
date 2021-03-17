import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UserService } from '../../services';
import { AuthService } from '../../services/auth.service';

import * as actions from '../actions/';



@Injectable({
  providedIn: 'root'
})
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private userService: UserService) {}

  loginWithToken$ = createEffect(
    () => this.actions$.pipe(
      ofType( actions.loginWithToken ),
      mergeMap(
        ({token, language, id, utcOffsetMinutes}) => this.authService.loginWithToken(token, language, id, utcOffsetMinutes)
          .pipe(
            map( ( session ) => actions.loginWithTokenSuccess({  session })),
            catchError( payload => of( actions.loginSetError({ payload })))
          )
      )
    )
  );



  updateUserInfo$ = createEffect(
    () => this.actions$.pipe(
      ofType(actions.updateUserInfo),
      mergeMap(
        ({idUser}) => {
        //console.log('update user info id user', idUser);
          return this.userService.getUserByUuid( idUser )
          .pipe(
            map( user => {
            //console.log('set user info result', user)
              return actions.setUserInfo({ user })
            }),
            catchError( payload => of( actions.loginSetError({ payload })))
          )
        }
      )
    )
  );

  updateCompanyInfo = createEffect(
    () => this.actions$.pipe(
      ofType(actions.setUserInfo),
      mergeMap(
        () => {
        //console.log('update user info id user', idUser);
          return this.userService.getUserCompanies()
          .pipe(
            map( companies => actions.setCompanies({ companies })),
            catchError( payload => of( actions.loginSetError({ payload })))
          )
        }
      )
    )
  );

  updateCompanySession = createEffect(
    () => this.actions$.pipe(
      ofType(actions.setSessionData),
      mergeMap(
        ({ payrollType, company }) => {
        //console.log('update user info id user', idUser);
          return this.authService.setSessionData(payrollType, company)
          .pipe(
            map( () => actions.setSessionDataSuccess()),
            catchError( payload => of( actions.loginSetError({ payload })))
          )
        }
      )
    )
  );

  updateSessionDataInfo = createEffect(
    () => this.actions$.pipe(
      ofType(actions.setSessionDataSuccess),
      mergeMap(
        () => {
        //console.log('update user info id user', idUser);
          return this.userService.getUserCompanies()
          .pipe(
            map( companies => actions.setCompanies({ companies })),
            catchError( payload => of( actions.loginSetError({ payload })))
          )
        }
      )
    )
  );

  updatePayrollTypesInfo = createEffect(
    () => this.actions$.pipe(
      ofType(actions.setCompanies),
      mergeMap(
        () => {
        //console.log('update user info id user', idUser);
          return this.userService.getPayrollTypes()
          .pipe(
            map( types => actions.setPayrollTypes({ types })),
            catchError( payload => of( actions.loginSetError({ payload })))
          )
        }
      )
    )
  );

  updateSessionInfo = createEffect(
    () => this.actions$.pipe(
      ofType(actions.setPayrollTypes),
      mergeMap(
        () => {
        //console.log('update user info id user', idUser);
          return this.userService.getPayrollTypes()
          .pipe(
            map( types => {
            console.log('set session result', types)
              return actions.setPayrollTypesSuccess()
            }),
            catchError( payload => of( actions.loginSetError({ payload })))
          )
        }
      )
    )
  );

  // Menu
  setMenuDataProcess$ = createEffect(
    () => this.actions$.pipe(
      ofType( actions.setPayrollTypesSuccess),
      mergeMap(
        () => {
            return this.authService.getUserMenu()
          .pipe(
            map( menus => actions.setMenuData({ menus }))
          )
        }
      )
    )
  );




  

  

  

  // set society
  setSociety = createEffect(
    () => this.actions$.pipe(
      ofType(actions.setSociety),
      mergeMap(
        ({id}) => {
        //console.log('update user info id user', idUser);
          return this.authService.setSociety(id)
          .pipe(
            map( auth => {
            //console.log('set user info result', user)
              return actions.setSocietySuccess({ auth })
            }),
            catchError( payload => of( actions.loginSetError({ payload })))
          )
        }
      )
    )
  );

  setSocietySuccess = createEffect(
    () => this.actions$.pipe(
      ofType(actions.setSocietySuccess),
      mergeMap(
        ({ auth }) => this.authService.setLocalData(auth)
        //console.log('update user info id user', idUser);

          .pipe(
            map( (locked) => locked ? actions.setLockedTokenStatus({ blocked: locked })  : actions.updateProfileData()),
            catchError( payload => of( actions.loginSetError({ payload })))
          )

      )
    )
  );

  validateSesion$ = createEffect(
    () => this.actions$.pipe(
      ofType( actions.loginValidateSesion ),
      mergeMap(
        () => this.authService.validateSesion()
        // () => of(true)
          .pipe(
            map( session => actions.loginWithTokenSuccess({ session })),
            catchError( payload => of( actions.loginSetError({ payload })))
          )
      )
    )
  );

  execGetValidatePwd$ = createEffect(
    () => this.actions$.pipe(
      ofType( actions.getValidatePwd),
      mergeMap(
        ({password}) => {
            return this.authService.getValidatePwd(password)
          .pipe(
            map( (success) =>  actions.setLockedTokenStatus({ blocked: !success })),
            catchError( payload => of( actions.loginSetError({ payload })))
          )
        }
      )
    )
  );

  validateSesionBlocked$ = createEffect(
    () => this.actions$.pipe(
      ofType( actions.loginValidateSesionBlocked ),
      mergeMap(
        () => this.authService.validateSesion()
          .pipe(
            map( auth => actions.setLockedTokenStatus({ blocked: auth.locked })),
            catchError( payload => of( actions.loginSetError({ payload })))
          )
      )
    )
  );

  // Locked session

  execSetLockedToken$ = createEffect(
    () => this.actions$.pipe(
      ofType( actions.setLockedToken),
      mergeMap(
        () => {
            return this.authService.setLockedToken()
          .pipe(
            map( () => actions.setLockedTokenStatus({ blocked: true })),
            catchError( payload => of( actions.loginSetError({ payload })))
          )
        }
      )
    )
  );

  execSetLockedTokenStatus$ = createEffect(
    () => this.actions$.pipe(
      ofType( actions.setLockedTokenStatus),
      mergeMap(
        ({ blocked}) => {
            return of(this.authService.setBlocked(blocked))
          .pipe(
            map( isBlocked => isBlocked ?  actions.setLockedTokenStatusSuccess() : actions.updateProfileData())
          )
        }
      )
    )
  );

  

  // Logout
  logoutUser$ = createEffect(
    () => this.actions$.pipe(
      ofType( actions.logoutUser ),
      mergeMap(
        () => this.authService.logoutUser()
          .pipe(
            map( () => actions.logoutUserSuccess({ auth: null })),
            catchError( payload => of( actions.loginSetError({ payload })))
          )
      )
    )
  );

  logoutUserSuccess$ = createEffect(
    () => this.actions$.pipe(
      ofType( actions.logoutUserSuccess ),
      mergeMap(
        ({ auth }) => this.authService.logoutUserSuccess()
          .pipe(
            map( () => actions.logoutUserComplete())
          )
      )
    )
  );

}
