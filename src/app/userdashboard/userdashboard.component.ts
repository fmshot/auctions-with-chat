import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
  public currentUser ={};

  constructor() { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('current_user'));
    console.log('Current User',this.currentUser);
  }

}
