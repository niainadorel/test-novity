import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { DataService } from 'src/app/@core/services/data.service';
import { ITicket } from 'src/app/@shared/models/ticket.model';
import * as _ from 'lodash';
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  rows: any[] = []
  keywords: string[] = [];
  keysForApplyingSearch = ['title']
  filteredRows: any[] = [];
  limit = 5;
  limitChoice = [5, 8, 10, 15, 20]
  sortDirection = 1;
  showFilter = false;
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

  sortData(): void {
    this.sortDirection *= -1;
    this.rows = [...this.rows].sort((a: ITicket, b: ITicket) => {
      let aName = (a?.title || '').toLocaleLowerCase();
      let bName = (b?.title || '').toLocaleLowerCase();
      const difference = aName < bName ? 1 : aName > bName ? -1 : 0;
      return this.sortDirection * difference
    })
    this.applyFilter();
  }

  search(event: any) {
    this.keywords = event.target.value?.trim().toLowerCase().split(' ');
    this.applyFilter();
  }

  applyFilter() {
    this.filteredRows = this.rows.filter(el => {
      if (this.keywords && this.keywords.length) {
        let checker = false;
        const values = this.keysForApplyingSearch.reduce((previous, timerKey) => {
          return `${previous} ${_.get(el, timerKey, '')}`
        }, '').toLowerCase()
        for (let searchKey of this.keywords) {
          checker = !!(values.indexOf(searchKey) + 1);
          if (checker) {
            break;
          }
        }

        if (!checker) {
          return false;
        }
      }
      return true
    })
    this.ticketsTable.offset = 0;
    this.ticketsTable.recalculate();
  }

}
