import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'industry-partners',
  templateUrl: './industry-partners.component.html',
  styleUrls: ['./industry-partners.component.css']
})
export class IndustryPartnersComponent implements OnInit {
  res:any[];
  constructor(http:Http) {
    http.get("http://jsonplaceholder.typicode.com/users").subscribe(response=>{
      this.res=response.json();
    }); //end point for displaying the industry-partners name
   }
  ngOnInit() {
  }

}
