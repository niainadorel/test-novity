import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AccountManagerEntry } from './account-manager.model';

@Injectable({
  providedIn: 'root'
})
export class AccountManagerService {

  dummyData = [
    {
      _id: '1234',
      name: 'John Doe',
      email: 'admin@admin.com',
      password: 'admin',
      picture: 'assets/user.jpg'
    }
  ]
  constructor() { }

  getOne(id: string): Observable<AccountManagerEntry> {
    return of(this.dummyData.find(e => (e._id === id)) as AccountManagerEntry);
  }

  login(body: {email: string, password: string}): Observable<any> {
    const account = this.dummyData.find(e => (e.email === body.email && e.password === body.password));
    if (account) {
      return of(account);
    } else {
      return of({error: {errorMessage: 'Login error'}})
    }
  }

  logout(): Observable<any> {
    return of({success: true})
  }
}
