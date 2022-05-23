import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/@core/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title!: string;
  constructor(private dts: DataService) {
    this.dts.title$.subscribe(value => {
      this.title = value;
    })
  }

  ngOnInit(): void {
  }

}
