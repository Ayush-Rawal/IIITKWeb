import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
@Component({
  selector: 'students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
res:string[];
  constructor(private http:Http) {

    http.get("http://jsonplaceholder.typicode.com/users").subscribe(
     responese=>
     {
      this.res=responese.json();
     } 
    );
   }

  ngOnInit() {
  }

}
