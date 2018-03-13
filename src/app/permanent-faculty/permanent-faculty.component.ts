import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'permanent-faculty',
  templateUrl: './permanent-faculty.component.html',
  styleUrls: ['./permanent-faculty.component.css']
})
export class PermanentFacultyComponent implements OnInit {
  res:any[];
  constructor(http:Http) {
    http.get("http://jsonplaceholder.typicode.com/users").subscribe(response=>{
      this.res=response.json();
    }); //end point for displaying the faculties
   }
  ngOnInit() {
  }

}
