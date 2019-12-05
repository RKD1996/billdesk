import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AjaxCallsService {

  prod = false;

  local_url = (this.prod==true)?"https://evening-sands-00730.herokuapp.com":"http://localhost:3000";

  constructor(private netcall: HttpClient) { }

  getData(url){
    return this.netcall.get(this.local_url + url)
  }
  postData(url, data){
    return this.netcall.post(this.local_url + url, data)
  }
}
