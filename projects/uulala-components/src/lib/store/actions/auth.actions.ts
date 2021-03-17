import { createAction, props } from '@ngrx/store';
import { AccountModel } from '../../models/getters/account.model';
import { Auth } from '../../models/getters/auth.model';
import { CompanyModel } from '../../models/getters/company.model';
import { MenuModel } from '../../models/getters/menu.model';
import { PayrollSession } from '../../models/getters/payrollSession.model';
import { PayrollTypeModel } from '../../models/getters/payrollType.model';
import { SystemLanguajes } from '../../types/system.languages';

export const loginWithToken = createAction(
  '[Auth] Login With Token',
  props<{ token:string, language: number, id: string, utcOffsetMinutes: number }>()
);

export const loginWithTokenSuccess = createAction(
  '[Auth] Login With Token Success',
  props<{ session: PayrollSession }>()
);

export const validateSession = createAction(
  '[Auth] Validate Session',
  props<{ token: string }>()
);

export const updateUserInfo = createAction(
  '[Auth] Update user info',
  props<{ idUser: string }>()
);

export const setUserInfo = createAction(
  '[Auth] Set user info',
  props<{ user: AccountModel }>()
);

// select session
export const setSociety = createAction(
  '[Auth] Set Society',
  props<{ id: string }>()
)

export const setSocietySuccess = createAction(
  '[Auth] Set Society Success',
  props<{ auth: Auth }>()
)

// Validate session

export const loginValidateSesion = createAction( '[Auth] Login validate sesion' );
export const loginValidateSesionBlocked = createAction( '[Auth] Login validate sesion blocked' );
export const loginValidateSesionBlockedSuccess = createAction( '[Auth] Login validate sesion blocked Success' );

// languaje session
export const changeLanguage = createAction(
  '[Auth] Change language session',
  props<{ language: SystemLanguajes }>()
)

// Errors
export const loginSetError = createAction(
  '[Auth] Login set error',
  props<{ payload: any }>()
);

export const loginResetError = createAction('[Auth] Reset Error')


// Functionality

export const changeStep = createAction(
  '[Auth] Change step',
  props<{ step: number }>()
);


// blockec

export const setLockedTokenStatus= createAction(
  '[Auth] SET LOCKED status',
  props<{ blocked: boolean }>()
);

export const setLockedTokenStatusSuccess= createAction('[Auth] SET LOCKED status success');

export const setLockedToken = createAction('[Auth] SET LOCKED');


// Validate session active
export const getValidatePwd = createAction(
  '[Auth] Validate sesion pwd',
  props<{ password: string }>()
)

export const getValidatePwdSuccess = createAction(
  '[Auth] Validate sesion pwd',
  props<{ password: string }>()
)


// Logout

export const logoutUser = createAction(
  '[Auth] Logout user'
)

export const logoutUserSuccess = createAction(
  '[Auth] Logout user success',
  props<{ auth: Auth }>()
);

export const logoutUserComplete = createAction('[Auth] Logout user complete');

// Company data
export const updateCompanyInfo = createAction('[Auth] Update company info')


export const setCompanies = createAction(
  '[Auth] Set companies',
  props<{ companies: CompanyModel[] }>()
);

// Payroll types data

export const setPayrollTypes = createAction(
  '[Auth] Set payroll types',
  props<{ types: PayrollTypeModel[]}>()
)

export const setPayrollTypesSuccess = createAction('[Auth] Set payroll types success')


// session data

export const setSessionData = createAction(
  '[Auth] Set session data',
  props<{ payrollType: number, company: number}>()
)

export const setSessionDataSuccess = createAction('[Auth] Set session data success')


// Menu

export const setMenuData = createAction(
  '[Auth] Set menu data',
  props<{menus: MenuModel[]}>()
)

// Sidenav

export const changeTimer = createAction(
  '[Auth] Change Timer',
  props<{ timer: boolean }>()
)
