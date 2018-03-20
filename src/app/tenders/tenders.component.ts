import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tenders',
  templateUrl: './tenders.component.html',
  styleUrls: ['./tenders.component.css']
})
export class TendersComponent implements OnInit{

  constructor() { }

  public content = [
    {
      "name": "Limited Tender Inquiry for Supply & Installation of Furniture for Classroom",
      "desc": "IIITK/11/2017-18",
      "link": {
        "name":"Tender Document",
        "link":""
           },
      "osublink":{
        "name":"",
        "link":"",
      }
    },
    {
      "name": "",
      "desc": "",
      "link": {
        "name":"",
        "link":""
           },
      "osublink":{
        "name":"",
        "link":"",
      }
    },
  ]

  ngOnInit(){
  window.scrollTo(0,0);
  }
}