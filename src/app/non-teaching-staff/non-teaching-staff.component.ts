import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'non-teaching-staff',
  templateUrl: './non-teaching-staff.component.html',
  styleUrls: ['./non-teaching-staff.component.css']
})
export class NonTeachingStaffComponent implements OnInit {

  res:any[];
  constructor(http:Http) {
    http.get("http://jsonplaceholder.typicode.com/users").subscribe(response=>{
      this.res=response.json();
    }); //end point for displaying the faculties
   }
  ngOnInit() {
  }

}
