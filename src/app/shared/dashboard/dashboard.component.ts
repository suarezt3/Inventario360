import { Component, OnInit } from '@angular/core';
import { NgZorroModule } from '../../ng-zorro/ng-zorro.module';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [
    NgZorroModule,
    RouterModule,
  ]
})
export class DashboardComponent implements OnInit {
  isCollapsed = false;

  constructor() { }

  ngOnInit() {
  }

}
