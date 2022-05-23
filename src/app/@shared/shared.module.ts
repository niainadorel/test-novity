import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoadingDirective } from './directives/loading.directive';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserComponent } from './components/user/user.component';
import { PriorityPipe } from './pipes/priority.pipe';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { DateDiffPipe } from './pipes/date-diff.pipe';

const SHARED = [
  SidebarComponent,
  LoadingDirective,
  NavbarComponent,
  UserComponent,
  DateDiffPipe,
  PriorityPipe
]

@NgModule({
  declarations: [
    ...SHARED,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SweetAlert2Module.forRoot(),
  ],
  exports: [
    ...SHARED
  ]
})
export class SharedModule { }
