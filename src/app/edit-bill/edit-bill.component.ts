import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AjaxCallsService } from '../ajax-calls.service'

@Component({
  selector: 'app-edit-bill',
  templateUrl: './edit-bill.component.html',
  styleUrls: ['./edit-bill.component.scss']
})
export class EditBillComponent implements OnInit {
  bils: any = {
    name: '',
    amt: Number,
    date: Date
  };
  bill_data: any = [{
    id: Number,
    name: String,
    amt: Number,
    date: Date
  }];
  month;

  user_id = localStorage.getItem('username');

  constructor(
    private netcall: HttpClient,
    private ajax: AjaxCallsService
  ) {}

  ngOnInit() {
      this.getData();
  }

  getData(){
    this.ajax.getData("/bils/show/" + this.user_id).subscribe(res => {
      this.bill_data = res.bills;
      this.month = res.month_code;
    })
  }

  getMonthData(e){
    this.ajax.postData('/bils/get_month_data/' + this.user_id, {mon: this.month}).subscribe(res => {
      this.bill_data = res.bills;
      this.month = res.month_code;
    });
  }

  editexp(e){
    this.bils = e;
  }
  saveEdit(){
    this.ajax.postData('/bils/edit_expence/', this.bils).subscribe(res => {
      console.log(res);
      this.getData();
    });
  }

  myfilter(e){
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let dd = new Date(e).getDate();
    let m = monthNames[new Date(e).getMonth()];
    let yy = new Date(e).getFullYear();
    return (m + " "  + dd + ", " + yy);
  }
}
