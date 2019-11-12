import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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


  constructor(private netcall: HttpClient) {

   }

  ngOnInit() {
    this.getData();
  }

  getMonthData(e){
    console.log(e)
    this.netcall.post("http://localhost:3000/bils/get_month_data", {mon: this.month}).subscribe( res => {
      console.log(res)
      this.bill_data = res.bills;
      this.latest_bill = res.latest;
      this.total = res.total;
    });
  }

  getData(){
    this.netcall.get("http://localhost:3000/bils/show").subscribe( res => {
      this.bill_data = res.bills;
      this.latest_bill = res.latest;
      this.total = res.total;
    });
  }
  ngAfterContentInit(){
    console.log('hello')
    this.getData();
  }

  myfilter(e){
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let dd = new Date(e).getDate();
    let m = monthNames[new Date(e).getMonth()];
    let yy = new Date(e).getFullYear();
    return (m + " "  + dd + ", " + yy);
  }


}
