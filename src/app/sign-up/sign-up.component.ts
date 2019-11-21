import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AjaxCallsService } from '../ajax-calls.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user: any = {
    username: '',
    password_digest: '',
    name: '',
    email: '',
    mobile: ''
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

  signUp(e){
    console.log(e);
    this.ajax.postData('/users', e).subscribe(res=> {
      if(res.success){
        this.router.navigateByUrl('/');
      }
    })
  }

  changeIcon(){
    console.log(this.isActive, this.pass_icon, this.text_type)
    this.isActive = !this.isActive
    this.isActive? (this.pass_icon = 'visibility_off', this.text_type = 'text') : (this.pass_icon = 'visibility',  this.text_type = 'password');
  }

}
