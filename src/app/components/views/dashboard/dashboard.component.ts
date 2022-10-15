import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  showSummary = true;
  showInventory = false;
  showStats = false;

  constructor() { }

  ngOnInit(): void {
  }
   transactions = [
    {
      load: '51651',
      date: '01-10-2022',
      paymentType: 'cash',
      amount: 4891
    },
    {
      load: '44632',
      date: '01-10-2022',
      paymentType: 'cash',
      amount: 22648
    },
    {
      load: '23526',
      date: '01-10-2022',
      paymentType: 'cash',
      amount: 99431
    },
    {
      load: '096839',
      date: '01-10-2022',
      paymentType: 'cash',
      amount: 17539
    }
   ]
}
