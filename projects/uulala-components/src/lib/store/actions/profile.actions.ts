import { createAction, props } from '@ngrx/store';



export const updateProfileData = createAction(
  '[Profile] Profile User Data');

export const profileResetError = createAction('[profile] Reset error');
//Error manager
export const profileError = createAction(
  '[Profile] Profile User Error',
  props<{ payload: any }>());
