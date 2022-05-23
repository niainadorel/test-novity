import { Component, OnInit } from '@angular/core';
import { IMenu } from '../../models/menu.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  principaleMenus: IMenu[] = [
    {
      link: '/pages/overview',
      icon: 'fas fa-chart-pie',
      title: 'Overview'
    },
    {
      link: '/pages/tickets',
      icon: 'fas fa-ticket',
      title: 'Tickets'
    },
    {
      link: '/pages/ideas',
      icon: 'fas fa-lightbulb',
      title: 'Ideas'
    },
    {
      link: '/pages/contacts',
      icon: 'fas fa-users',
      title: 'Contacts'
    },
    {
      link: '/pages/agent',
      icon: 'fas fa-user-tie',
      title: 'Agent'
    },
    {
      link: '/pages/articles',
      icon: 'fas fa-book',
      title: 'Articles'
    }
  ]
  settingsMenu: IMenu[] = [
    {
      link: '/pages/settings',
      icon: 'fas fa-gear',
      title: 'Settings'
    },
    {
      link: '/pages/subscription',
      icon: 'fas fa-award',
      title: 'Subscription'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
