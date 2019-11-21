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
    date: Date,
    username: localStorage.getItem('username')
  }
  final_data: any = [];
  constructor(private netcall: HttpClient) {

  }

  ngOnInit() {

  }

  add() {
    this.exp.username = localStorage.getItem('username')
    this.final_data.push(this.exp);
    this.netcall.post('http://localhost:3000/bils/create_exp', {bils: this.exp}).subscribe(res => {
      console.log(res)
      this.exp = {
        name: '',
        amt: Number,
        date: Date,
        username: localStorage.getItem('username')
      }
    });
  }

  save() {
    console.log(this.final_data);

  }

}
