import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { DataService } from 'src/app/@core/services/data.service';
import { AccountLogoutRequested } from 'src/app/@core/store/account-manager/account-manager.actions';
import { AccountManagerEntry } from 'src/app/@core/store/account-manager/account-manager.model';
import { selectCurrentAccount } from 'src/app/@core/store/account-manager/account-manager.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title!: string;
  showUserMenu = false;
  user!: AccountManagerEntry;

  @ViewChild('confirmSwal') private confirmSwal!: SwalComponent;
  @ViewChild('notificationsSwal') private notificationsSwal!: SwalComponent;

  constructor(private dts: DataService, private store: Store) {
    this.dts.title$.subscribe(value => {
      this.title = value;
    })
    this.store.select(selectCurrentAccount).subscribe(value => {
      this.user = value as AccountManagerEntry;
    })
  }

  ngOnInit(): void {
  }

  onShowMenu(event: boolean): void {
    this.showUserMenu = event;
    console.log('On show meny', event);
  }

  confirmLogout(): void {
    this.confirmSwal.fire();
  }

  logout(): void {
    this.store.dispatch(AccountLogoutRequested({email: this.user?.email}))
  }

  showNotifications(): void {
    this.notificationsSwal.fire();
  }

}
