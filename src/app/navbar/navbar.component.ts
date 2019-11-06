import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  status: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  togglenav() {
    this.status = !this.status;
  }

}
