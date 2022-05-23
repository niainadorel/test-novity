import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import {
  AccountLoadingRequested,
  AccountLoginFailed,
  AccountLoginRequested,
  AccountLoginSuccess,
  AccountLogoutSuccess,
  checkTokenSuccess
} from './account-manager.actions';

import { AccountManagerEntry, AccountManagerState } from './account-manager.model';

export const AccountManagerAdapter: EntityAdapter<AccountManagerEntry> = createEntityAdapter<AccountManagerEntry>({
  selectId: (entry) => entry._id as string,
});

export const initialState: AccountManagerState = AccountManagerAdapter.getInitialState({
  loading: false,
  errorMessage: undefined,
  currentAccount: null
});

export const AccountManagerReducer = createReducer(
  initialState,
  on(
    AccountLoginRequested,
    AccountLoadingRequested,
    (state) => {
      return {
        ...state,
        loading: true,
        errorMessage: undefined,
      };
    }),
  on(
    AccountLoginFailed,
    (state, { errorMessage }) => {
      return {
        ...state,
        loading: false,
        errorMessage
      };
    }),
  on(
    AccountLoginSuccess,
    checkTokenSuccess,
    (state, { account }) => {
      return {
        ...state,
        loading: false,
        currentAccount: account
      };
    }),
  on(AccountLogoutSuccess, (state) => {
    return {
      ...state,
      currentAccount: null
    };
  })
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = AccountManagerAdapter.getSelectors();
