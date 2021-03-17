import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { LocalService } from '../../services/local.service';
import * as actions from '../actions/';

@Injectable({
  providedIn: 'root'
})
export class ProfileEffects {
  constructor(
    private actions$: Actions,
    private localService: LocalService
    ) {}



  updateUsersData$ = createEffect(
    () => this.actions$.pipe(
      ofType(actions.updateProfileData),
      mergeMap(
        () => of(this.localService.getValue('uid'))

          .pipe(
            map((idUser) => actions.updateUserInfo({idUser})),
            catchError(payload => of(actions.profileError({ payload })))
          )
      )
    )
  );


}
