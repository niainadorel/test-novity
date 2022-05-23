import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import * as fromActions from './account-manager.actions';
import {AccountManagerService} from './account-manager.service';
import {Store} from '@ngrx/store';
import {of} from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable()
export class AccountManagerEffects {

  loginAccountManager$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.AccountLoginRequested),
      switchMap((loginData) => {
        return this.api.login(loginData).pipe(
          map((data) => {
            if (data.error?.errorMessage) {
              return fromActions.AccountLoginFailed({errorMessage: data.error.errorMessage});
            } else {
              localStorage.setItem('token', data._id);
              this.router.navigate(['/pages/tickets']);
              return fromActions.AccountLoginSuccess({account: data});
            }
          }),
          catchError((data: any) => {
            return of(fromActions.AccountLoginFailed({errorMessage: data.error.errorMessage}));
          })
        );
      })
    )
  );

  loginRequired$ = createEffect(() =>
  this.actions$.pipe(
    ofType(fromActions.loginRequired),
    tap(({redirectTo}) => {
      const helper = new JwtHelperService();
      const token = localStorage.getItem('token');
      localStorage.setItem('dashboardRedirectUrl', redirectTo);

      if (token) {  // Checking token
        this.store.dispatch(fromActions.checkToken({token, id: token}));
      } else {
        localStorage.removeItem('token');
        this.router.navigate(['/auth/login']);
      }
    })
  )
, {dispatch: false});

  checkToken$ = createEffect(() =>
  this.actions$.pipe(
    ofType(fromActions.checkToken),
    switchMap(({token, id}) => {
      return this.api.getOne(id).pipe(
        map((data) => {
          if (data) {
            return fromActions.checkTokenSuccess({account: data});
          } else {
            localStorage.removeItem('token');
            return fromActions.checkTokenFailure({error: 'User Not Found'});
          }
        }),
        catchError((error) => {
          localStorage.removeItem('token');
          return of(fromActions.checkTokenFailure({error}));
        })
      );
    })
  )
  );

  checkTokenSuccess$ = createEffect(() =>
  this.actions$.pipe(
    ofType(fromActions.checkTokenSuccess),
    tap(() => {
      const redirectUrl = localStorage.getItem('dashboardRedirectUrl') || '/pages/tickets';
      this.router.navigate([redirectUrl]);
    })
  )
  , {dispatch: false});

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.AccountLogoutRequested),
      switchMap(() =>
        this.api.logout().pipe(
          map(_ => {
            return fromActions.AccountLogoutSuccess();
          })
        )
      )
    )
  );

  logoutSuccess$ = createEffect(() =>
  this.actions$.pipe(
    ofType(fromActions.AccountLogoutSuccess),
    tap(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/auth/login']);
    })
  ), {dispatch: false});

  constructor(
    private actions$: Actions,
    private api: AccountManagerService,
    private router: Router,
    private store: Store
  ) {}

}
