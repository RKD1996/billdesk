import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AjaxCallsService {

  local_url = "http://localhost:3000";

  constructor(private netcall: HttpClient) { }

  getData(url){
    return this.netcall.get(this.local_url + url)
  }
  postData(url, data){
    return this.netcall.post(this.local_url + url, data)
  }
}
