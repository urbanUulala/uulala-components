import { createAction, props } from '@ngrx/store';

export const setSessionBarState = createAction(
    '[UI] Set session bar state',
    props<{sessionBarState: number}>()
);


