import { Component, OnInit } from '@angular/core';
import { AjaxCallsService } from '../ajax-calls.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  change;
  new;
  confirm;
  reset_token;
  user_id = localStorage.getItem('username');

  constructor(
      private ajax: AjaxCallsService,
      private router: Router
  ) { }

  ngOnInit() {
    this.getToken()
  }

  getToken(){
    this.ajax.getData('/users/reset_token/' + this.user_id).subscribe( (res: any) => {
      this.reset_token = res.token;
    })
  }

  send(){
    if(this.new == this.confirm && this.new.length >= 6){
      this.ajax.postData('/users/change_password/' + this.user_id + '/' + this.reset_token, {password_digest: this.new}).subscribe((res: any) => {
        alert(res.msg);
        this.router.navigateByUrl('/')
      })
    } else {
      alert('password does not match')
    }
  }

}
