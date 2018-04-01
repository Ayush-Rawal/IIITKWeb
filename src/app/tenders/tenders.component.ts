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
        "name": "Tender Document",
        "link": "/pdf/Tender/tender-class-furniture.pdf"
           }
    },
    {
      "name": "The Limited Tender Document for purchase of Books for Library IIIT Kota",
      "desc": "The List of Books is attached herewith.",
      "link": {
        "name": "Tender Document",
        "link": "/pdf/Tender/tender-library.pdf"
           },
      "sublink": {
        "name": "List of Books",
        "link": "/pdf/Tender/List-of-Book-Bank-Books1.pdf",
      }
    },
  ]

  ngOnInit() {
  window.scrollTo(0, 0)
  }
}
