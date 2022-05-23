import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoadingDirective } from './directives/loading.directive';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserComponent } from './components/user/user.component';
import { PriorityPipe } from './pipes/priority.pipe';

const SHARED = [
  SidebarComponent,
  LoadingDirective,
  NavbarComponent,
  UserComponent,
  PriorityPipe
]

@NgModule({
  declarations: [
    ...SHARED,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ...SHARED
  ]
})
export class SharedModule { }
