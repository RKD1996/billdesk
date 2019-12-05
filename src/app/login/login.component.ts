import { Component, OnInit } from '@angular/core';
import { AjaxCallsService } from '../ajax-calls.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:any = {
    username: '',
    password_digest: ''
  }

  isActive = false;
  pass_icon = 'visibility';
  text_type = 'password';

  constructor(
    private ajax: AjaxCallsService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(e){
    this.ajax.postData('/users/login', e).subscribe((res:any) => {
      if(res.success){
        localStorage.setItem("username", res.username)
        localStorage.setItem("name", res.name)
        localStorage.setItem("email", res.mail)
        localStorage.setItem("mob", res.ph_no)
        localStorage.setItem("token", res.token)
        this.router.navigateByUrl('/home');
      } else {
        alert(res.msg)
        this.user = {
          username: '',
          password_digest: ''
        }
        if(res.path.length > 1){
          this.router.navigateByUrl(res.path);
        }
      }
    })
  }


  changeIcon(){
    this.isActive = !this.isActive
    this.isActive? (this.pass_icon = 'visibility_off', this.text_type = 'text') : (this.pass_icon = 'visibility',  this.text_type = 'password');
  }

}
