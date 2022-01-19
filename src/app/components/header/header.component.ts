import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isEditing: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleEditing() {
    this.isEditing = !this.isEditing;
  }

  onFormChangeEditFalse(value: boolean) {
    this.isEditing = value;
  }

}
