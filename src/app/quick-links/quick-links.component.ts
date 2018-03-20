import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'quick-links',
  templateUrl: './quick-links.component.html',
  styleUrls: ['./quick-links.component.css']
})

export class QuickLinksComponent {
  constructor() { }

  public content = [
      {
        "name": "Vacancies",
        "link": "/vacancies"
      }, {
        "name": "Tenders",
        "link": "/tenders"
      }, {
        "name": "About us",
        "link": "/about"
      }, {

      }
    ]

}
