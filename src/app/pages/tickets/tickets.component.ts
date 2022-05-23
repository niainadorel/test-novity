import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { DataService } from 'src/app/@core/services/data.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  rows: any[] = []
  keywords: string[] = [];
  keysForApplyingSearch = ['nom']
  filteredRows: any[] = [];
  limit = 5;
  limitChoice = [5, 8, 10, 15, 20]

  @ViewChild('ticketsTable') ticketsTable!: DatatableComponent
  constructor(
    private dts: DataService
  ) {
    this.rows = this.dts.tickets;
    this.filteredRows = this.dts.tickets;
  }

  ngOnInit(): void {
  }

  nextPage(): void {
    this.ticketsTable.offset = this.ticketsTable.offset + 1;
    this.ticketsTable.recalculate();
  }
  prevPage(): void {
    this.ticketsTable.offset = this.ticketsTable.offset - 1;
    this.ticketsTable.recalculate();
  }

  changeLimit(event: any): void {
    this.limit = event?.target?.value;
  }

}
