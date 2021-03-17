import { createReducer, on } from '@ngrx/store';




import * as authActions from '../actions/auth.actions';

import { SystemLanguajes } from '../../types/system.languages';
import { StringTools } from '../../utilities';
import { authConstants } from '../../constants/auth.constants';
import { AccountModel } from '../../models/getters/account.model';
import { Auth } from '../../models/getters/auth.model';
import { CompanyModel } from '../../models/getters/company.model';
import { PayrollTypeModel } from '../../models/getters/payrollType.model';
import { MenuModel } from '../../models/getters/menu.model';



export interface AuthState {
  user: AccountModel;
  error: any;
  language: SystemLanguajes,
  aux: any;
  step: number;
  auth: Auth;
  companies: CompanyModel[];
  types: PayrollTypeModel[];
  company: number;
  type: number;
  menus: MenuModel[];
}

export const authInitialState: AuthState = {
  user: null,
  error: null,
  language: 'initial',
  aux: null,
  step:   authConstants.STEPS.INITIAL,
  auth: null,
  companies: null,
  types: null,
  company: 0,
  type: 0,
  menus: null
}

const _authReducer = createReducer(authInitialState,
  on( authActions.changeLanguage, (state, { language }) => ({ ...state, language })),


  // Login
  on( authActions.loginWithTokenSuccess, (state, { session }) => ({ ...state, aux: session, step: authConstants.STEPS.SOCIETIES })),

  // language
  on( authActions.changeLanguage, (state, { language }) => ({ ...state, language })),

  // Functionality
  on( authActions.changeStep, (state, { step }) => ({ ...state, step, error: null })),

  // User Data
  on( authActions.setUserInfo, (state, { user } ) => ({
    ...state,
    user,
    loaded: true
  })),

  // Errors
  on( authActions.loginSetError, (state, { payload }) => ({
    ...state,
    auth: null,
    error: {
      url: payload.networkError.url,
      message: StringTools.getGraphErrorMessage( payload.networkError.error.Message )
    }
  })),
  on( authActions.loginResetError, (state ) => ({ ...state, error: null})),

  //locked session
  on( authActions.setLockedToken, state => ({ ...state })),
  on( authActions.setLockedTokenStatus, ( state, { blocked }) => ({ ...state, auth: { ...state.auth, locked: blocked} })),

  // Logout
  on( authActions.logoutUserSuccess, ( state, { auth }) => ({ ...state, auth })),
  on( authActions.logoutUserComplete, state => ({ ...state, user: null  })),

  // Companies 
  on ( authActions.setCompanies, (state, { companies }) => ({ ...state, companies})),

  // payroll types 
  on ( authActions.setPayrollTypes, (state, { types }) => ({ ...state, types})),

  on( authActions.setSocietySuccess, (state, { auth }) => ({ 
    ...state, 
    type: auth.payrollType,
    company: auth.company,
    step: authConstants.STEPS.IN_SESSION 
  })) ,
  on( authActions.setSessionData, (state, { company, payrollType }) => ({
    ...state,
    company,
    type: payrollType
  })),

  // Menu
  on( authActions.setMenuData, (state, { menus }) => ({ ...state, menus }))
);

export function authReducer(state, action) {
  return _authReducer(state, action);
}
