import { Component, AfterContentChecked } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentChecked {

  title = 'billdesk';

  constructor(
    private router: Router
  ) {

  }

  ngOnInit(){
    this.checkRoute();
  }

  ngAfterContentChecked() {
    this.checkRoute();
  }

  checkRoute(){
    let isLogged = true;
    let token = localStorage.getItem('token');
    if(!token){
      if(this.router.url != '/' && this.router.url != '/sign-up'){
        this.router.navigateByUrl('/')
        isLogged = false;
      }
    } else {
      isLogged = true;
      if(isLogged && (this.router.url == '/' || this.router.url == '/sign-up')){
          this.router.navigateByUrl('/home');
      } else  if(this.router.url != '/' && this.router.url != '/sign-up'){
        //
      }
    }
  }

}
