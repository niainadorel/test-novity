import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleResolver } from 'src/app/@core/resolvers/title.resolver';
import { TicketsComponent } from './tickets.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Tickets'
    },
    resolve: {
      title: TitleResolver
    },
    component: TicketsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
