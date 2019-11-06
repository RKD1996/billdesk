import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bill_data=[
    {
      id: 1,
      name: 'Food bill',
      amt: 500.00,
      date: new Date()
    },
    {
      id: 2,
      name: 'Hair cut',
      amt: 150.00,
      date: new Date()
    },
    {
      id: 3,
      name: 'Bike Petrol',
      amt: 332.30,
      date: new Date()
    },
    {
      id: 4,
      name: 'House Rent',
      amt: 12000.00,
      date: new Date()
    },
    {
      id: 5,
      name: 'Electricity Bill',
      amt: 1500.00,
      date: new Date()
    }

  ]
  latest_bill = [
    {
      id: 1,
      name: 'Electricity Bill',
      amt: 1500.00,
      date: new Date()
    }
  ]

  total = 25630; 


  constructor() { }

  ngOnInit() {
  }

}
