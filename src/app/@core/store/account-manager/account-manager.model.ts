import { EntityState } from '@ngrx/entity/src/models';

export interface AccountManagerEntry {
  _id?: string;
  name: string;
  email: string;
  password?: string;
}

export interface AccountManagerState extends EntityState<AccountManagerEntry> {
  loading: boolean;
  errorMessage?: string;
  currentAccount: AccountManagerEntry|null;
}
