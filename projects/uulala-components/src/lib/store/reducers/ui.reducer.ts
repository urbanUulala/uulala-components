import { createReducer, on } from '@ngrx/store';

import * as actions from '../actions';

export interface UiState {
    sessionBarState: number; 
}

export const uiInitialState: UiState = {
   sessionBarState: 1,
}

const _uiReducer = createReducer(uiInitialState,

    on( actions.setSessionBarState, (state, { sessionBarState }) => ({ ...state, sessionBarState })),

);

export function uiReducer(state, action) {
    return _uiReducer(state, action);
}