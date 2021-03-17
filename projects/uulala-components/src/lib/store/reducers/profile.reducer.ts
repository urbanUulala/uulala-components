import { createReducer, on } from '@ngrx/store';
import { StringTools } from '../../utilities';
import * as actions from '../actions/';

export interface ProfileState {

}
export const profileInitialState: ProfileState = {

}


const _profileReducer = createReducer(profileInitialState,
  //profile account

  //Global sate

  on(actions.updateProfileData, (state) => (
    {
      ...state
    })),
  //update status message pop

  on(actions.profileError, (state, { payload }) => ({
    ...state,
    error: {
      url: payload.networkError.url,
      message: StringTools.getGraphErrorMessage( payload.networkError.error.Message )
    }
  })),
  on( actions.profileError, state => ({ ...state, error: null})),
  on(actions.profileResetError, (state) => ({...state, error: null }))

);

export function profileReducer(state, action) {
  return _profileReducer(state, action);
}
