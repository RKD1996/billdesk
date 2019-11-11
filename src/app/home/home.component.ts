import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bill_data: any = []
  latest_bill: any = []
  total;


  constructor(private netcall: HttpClient) { }

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.netcall.get("http://localhost:3000/bils/show").subscribe(function (res) {
      this.bill_data = res.bills;
      this.latest_bill = res.latest;
      this.total = res.total;
      console.log(this.bill_data);
      console.log(this.latest_bill);
      console.log(this.total);
    });
  }

}
