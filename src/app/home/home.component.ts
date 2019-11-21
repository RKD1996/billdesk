import { Component, OnInit } from '@angular/core';
import { AjaxCallsService } from '../ajax-calls.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  bill_data: any = [{
    id: Number,
    name: String,
    amt: Number,
    date: Date
  }]
  latest_bill: any = {
    name: '',
    amt: '',
    date: Date
  };
  total;
  month;

  user_id = localStorage.getItem('username');


  constructor(
    private ajax: AjaxCallsService
  ) {

   }

  ngOnInit() {
    this.getBillData();
  }

  getMonthData(e){
    this.ajax.postData("/bils/get_month_data/" + this.user_id, {mon: this.month}).subscribe( res => {
      this.bill_data = res.bills;
      this.latest_bill = res.latest;
      this.total = res.total;
      this.month = res.month_code;
    });
  }

  getBillData(){
    this.ajax.getData("/bils/show/" + this.user_id ).subscribe( res => {
      this.bill_data = res.bills;
      this.latest_bill = res.latest;
      this.total = res.total;
      this.month = res.month_code;
    });
  }
  ngAfterContentInit(){
    this.getBillData();
  }

  myfilter(e){
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let dd = new Date(e).getDate();
    let m = monthNames[new Date(e).getMonth()];
    let yy = new Date(e).getFullYear();
    return (m + " "  + dd + ", " + yy);
  }


}
