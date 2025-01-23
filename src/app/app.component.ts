import { Component, OnInit } from '@angular/core';

import { DashboardComponent } from './shared/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }


  ngOnInit() {

  }

}
