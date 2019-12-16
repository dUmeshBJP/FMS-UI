import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  totalEvents = 8;
  totalUsers = 877;
  totalVolunteers = 45;
  totalParticipants = 45;
  ngOnInit() {
  }

}
