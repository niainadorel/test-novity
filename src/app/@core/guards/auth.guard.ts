import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { loginRequired } from '../store/account-manager/account-manager.actions';
import { selectCurrentAccount } from '../store/account-manager/account-manager.selectors';


// Need Loogin Guard
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private store: Store,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.store.pipe(
            select(selectCurrentAccount),
            map(user => {
                console.log('USER', user, state.url);
                if (!user) {
                    // redirectTo state.url when logged
                    this.store.dispatch(loginRequired({redirectTo: state.url}));
                    return false;
                } else {
                    return true;
                }
            })
        );
    }
}

// Must not logged in guard
@Injectable({ providedIn: 'root' })
export class NotLoggedYetGuard implements CanActivate {
    constructor(
        private store: Store,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.store.pipe(
            select(selectCurrentAccount),
            map(user => {
                if (user) {
                    this.router.navigate(['/pages/tickets']);
                    return false;
                } else {
                    const token = localStorage.getItem('token');
                    if (token) { // Check if token exist and try to navigate to '/'
                        this.router.navigate(['/pages/tickets']);
                        return false;
                    } else {
                        return true;
                    }
                }
            })
        );
    }
}
