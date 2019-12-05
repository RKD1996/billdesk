import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  user_id;
  email;
  name;
  ph_no;
  constructor() { }

  ngOnInit() {
    this.user_id = localStorage.getItem('username');
    this.email = localStorage.getItem('email');
    this.name = localStorage.getItem('name');
    this.ph_no = localStorage.getItem('mob');
  }

}
