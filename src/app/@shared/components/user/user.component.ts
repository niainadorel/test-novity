import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() picture!: string;
  @Input() reverse!: boolean;

  @Output() showMenu = new EventEmitter(false);
  private _showMenu = false;
  constructor() { }

  ngOnInit(): void {
  }

  onShowMenu() {
    this._showMenu = !this._showMenu;
    this.showMenu.emit(this._showMenu);
  }

  hideMenu() {
    if (this._showMenu) {
      setTimeout(() => {
        this._showMenu = false;
        this.showMenu.emit(this._showMenu);
      }, 250)
    }
  }
}
