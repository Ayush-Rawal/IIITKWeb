import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {

  constructor() { }

  submit(form){
    console.log(form);
  }
  
  log(data){
    console.log(data);
  }

}
