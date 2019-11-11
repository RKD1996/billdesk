import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.scss']
})
export class AddBillComponent implements OnInit {
  exp = {
    name: String = '',
    amt: Number,
    date: Date
  }
  final_data: any = [];
  constructor(private netcall: HttpClient) {

  }

  ngOnInit() {

  }

  add() {
    this.final_data.push(this.exp);
    this.exp = {
      name: '',
      amt: Number,
      date: Date
    }
    console.log(this.final_data);
  }

  save() {
      this.netcall.post('http://localhost:3000/bils/create_exp', {exp: this.final_data}).subscribe(res => {
        console.log(res)
      });
  }

}
