import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor() { }

  openNav()
   {
  document.getElementById("mySidenav").style.width = "250px";
  }
  closeNav() 
  {
  document.getElementById("mySidenav").style.width = "0";
  }
  ngOnInit()
  {

  }
}
