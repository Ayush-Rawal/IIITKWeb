import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'guest-faculty',
  templateUrl: './guest-faculty.component.html',
  styleUrls: ['./guest-faculty.component.css']
})
export class GuestFacultyComponent implements OnInit {

  res:any[];
  constructor(http:Http) {
    http.get("http://jsonplaceholder.typicode.com/users").subscribe(response=>{
      this.res=response.json();
    }); //end point for displaying the faculties
   }
  ngOnInit() {
  }

}
