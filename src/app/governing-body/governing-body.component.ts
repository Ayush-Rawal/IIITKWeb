import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'governing-body',
  templateUrl: './governing-body.component.html',
  styleUrls: ['./governing-body.component.css']
})
export class GoverningBodyComponent implements OnInit {

  res:any[];
  res1:any[];
  constructor(http:Http) {
    http.get("http://jsonplaceholder.typicode.com/users").subscribe(response=>{
      this.res=response.json();
    });
    }
  ngOnInit() {
  }

}
