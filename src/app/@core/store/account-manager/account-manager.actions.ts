import {createAction, props} from '@ngrx/store';
import {AccountManagerEntry} from './account-manager.model';

export const AccountLoadingRequested = createAction(
  '[AccountManager] Loading AccountManager'
);

export const AccountLoginRequested = createAction(
  '[AccountManager] Login AccountManager',
  props<{email: string, password: string}>()
);

export const AccountLoginSuccess = createAction(
  '[AccountManager] Login AccountManager Success',
  props<{account: AccountManagerEntry}>()
);

export const AccountLoginFailed = createAction(
  '[AccountManager] Login Failure',
  props<{errorMessage: any}>()
);

export const AccountLogoutRequested = createAction(
  '[AccountManager] Logout',
  props<{email: string}>()
);
export const AccountLogoutSuccess = createAction(
  '[AccountManager] Logout Success'
);

export const loginRequired = createAction(
  '[User] Login Required',
  props<{redirectTo: string}>()
);
export const checkToken = createAction(
  '[User] Check token',
  props<{token: string, id: string}>()
);

export const checkTokenSuccess = createAction(
  '[User] Check Token Success',
  props<{account: AccountManagerEntry}>()
);

export const checkTokenFailure = createAction(
  '[User] Check Token Failure',
  props<{error: string}>()
);

export const resetError = createAction(
  '[AccountManager] Reset Error'
);
