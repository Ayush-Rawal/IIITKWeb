import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http'

@Component({
  selector: 'quick-links',
  templateUrl: './quick-links.component.html',
  styleUrls: ['./quick-links.component.css']
})
export class QuickLinksComponent implements OnInit {
links;
  constructor(http:Http) {
    http.get('http://jsonplaceholder.typicode.com/users').subscribe(response=>{
      this.links=response.json();
    });
   }

  ngOnInit() {
  }

}
