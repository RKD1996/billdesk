import { Component, OnInit, OnChanges } from '@angular/core';

import { AjaxCallsService } from '../ajax-calls.service'
@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent implements OnInit, OnChanges {

    month_select = new Date().getMonth() + 1;
    user_id = localStorage.getItem('username');
    month_data;
    year_data;
    year_select = new Date().getFullYear();
    title = 'Total spending in the ' + this.monthname(this.month_select) + ' ' + this.year_select;
     type = 'ColumnChart';
     data = [];
     options = {
     };
     width = 350;
     height = 445;

  constructor(
    private ajax: AjaxCallsService
  ) { }

  ngOnInit() {
    console.log(this.month_select)
    this.get_data();
    this.get_analyze_data();
    if(window.innerWidth > 500){
      this.width = 650;
    } else {
      this.width = 370;
      this.height = 450;
    }
  }

  ngOnChanges() {
    console.log('aftercontent')
    this.get_data();
    this.get_analyze_data();
  }

  monthname(e) {
    let monthdata = {
      '01': 'Jan',
      '02': 'Feb',
      '03': 'Mar',
      '04': 'Apr',
      '05': 'May',
      '06': 'Jun',
      '07': 'Jul',
      '08': 'Aug',
      '09': 'Sep',
      '10': 'Oct',
      '11': 'Nov',
      '12': 'Dec'
    }
    return monthdata[e];
  }

  search() {
    console.log(this.year_select, this.month_select);
      this.get_analyze_data();
  }

  get_data(){
    this.ajax.getData('/get_month_and_year_data/' + this.user_id).subscribe(res => {
      localStorage.setItem('cald_data', JSON.stringify(res));
      this.month_data = res.month;
      this.year_data = res.year;
    })
  }

  get_analyze_data(){
    this.ajax.getData('/get_monthly_data/' + this.user_id + '&' + this.month_select + '&' + this.year_select).subscribe(res => {
      this.data = res.weekly_data
      this.title = 'Total spending in the ' + this.monthname(this.month_select) + ' ' + this.year_select;
    })
  }

}
