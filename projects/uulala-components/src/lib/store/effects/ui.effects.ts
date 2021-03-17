import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from '../actions/';

@Injectable({
    providedIn: 'root'
})
export class UiEffects {
    constructor(private actions$: Actions) {}

    

}