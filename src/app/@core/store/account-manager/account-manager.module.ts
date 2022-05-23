import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {AccountManagerEffects} from './account-manager.effects';
import {StoreModule} from '@ngrx/store';
import {AccountManagerReducer} from './account-manager.reducer';
import {AccountManagerService} from './account-manager.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('account-manager', AccountManagerReducer),
    EffectsModule.forFeature([AccountManagerEffects])
  ],
  providers: [AccountManagerService]
})

export class AccountManagerStoreModule { }
