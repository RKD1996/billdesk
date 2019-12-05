import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AjaxCallsService } from '../ajax-calls.service'


@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.scss']
})
export class AddBillComponent implements OnInit {
  exp = {
    name: '',
    amt: Number,
    date: Date,
    username: localStorage.getItem('username')
  }
  final_data: any = [];
  constructor(private ajax: AjaxCallsService) {

  }

  ngOnInit() {

  }

  add() {
    this.exp.username = localStorage.getItem('username')
    this.final_data.push(this.exp);
    this.ajax.postData('/bils/create_exp', {bils: this.exp}).subscribe((res:any) => {
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
