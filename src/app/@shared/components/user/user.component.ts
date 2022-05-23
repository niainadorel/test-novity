import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() picture!: string;
  @Input() reverse!: boolean
  constructor() { }

  ngOnInit(): void {
  }

}
