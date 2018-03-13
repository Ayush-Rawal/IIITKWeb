import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
@Component({
  selector: 'students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  res:any[];
  constructor(http:Http) {
    http.get("http://jsonplaceholder.typicode.com/photos").subscribe(response=>{
      this.res=response.json();
    }); //end point for displaying the students pdf link
   }
  ngOnInit() {
  }

}
