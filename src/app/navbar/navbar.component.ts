import { Component, OnInit, AfterContentChecked} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterContentChecked {

  status: boolean = false;
  user_auth: String = '';
  rout_path: String;
  isLogin = false;

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
    this.rout_path = '';
  }

  togglenav() {
    this.status = !this.status;
  }

  ngAfterContentChecked() {
    this.user();
  }


  user() {
    if(localStorage.getItem('token')){
      this.isLogin = true;
      this.user_auth = 'Log-out';
    } else {
      this.isLogin = false;
      this.user_auth = 'Log-in';
      this.rout_path = '';
    }
  }

  logout() {
    localStorage.clear()
    this.user()
    this.route.navigateByUrl('')
  }

}
