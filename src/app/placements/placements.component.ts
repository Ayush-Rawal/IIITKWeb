import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'placements',
  templateUrl: './placements.component.html',
  styleUrls: ['./placements.component.css']
})
export class PlacementsComponent implements OnInit {

  res:any[];
  constructor(http:Http) {
    http.get("http://jsonplaceholder.typicode.com/photos").subscribe(response=>{
      this.res=response.json();
    }); //end point for displaying the placed students
   }
  ngOnInit() {
  }

}
