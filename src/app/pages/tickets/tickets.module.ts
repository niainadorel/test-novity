import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsComponent } from './tickets.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [
    TicketsComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    SharedModule,
    NgxDatatableModule
  ]
})
export class TicketsModule { }
