import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITicket } from 'src/app/@shared/models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  tickets: ITicket[] = [];
  title$ = new BehaviorSubject('');
  constructor() {
    this.generateDummyData();
  }

  generateDummyData() {
    const titles = ['Contact email not linked', 'Addings images to features', 'Lorem ipseum dolor sit'];
    for(let i = 0; i < 20; i++) {
      this.tickets.push({
        title: titles[i%(titles.length)],
        description: 'Description',
        customerName: 'John Doe',
        createdAt: new Date(),
        updatedAt: new Date(),
        priority: i % 3,
        dueDate: new Date()
      })
    }
  }
}
