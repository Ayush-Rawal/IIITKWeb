import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit { 

  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

}