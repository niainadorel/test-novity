import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AccountManagerState} from './account-manager.model';
import * as fromReducer from './account-manager.reducer';

const getUserState = createFeatureSelector<AccountManagerState>('account-manager');

export const selectAccountError = createSelector(getUserState, (state) => state.errorMessage);
export const selectAccountLoading = createSelector(getUserState, (state) => state.loading);
export const selectCurrentAccount = createSelector(getUserState, (state) => state.currentAccount);
export const selectAllAccount = createSelector(getUserState, fromReducer.selectAll);
