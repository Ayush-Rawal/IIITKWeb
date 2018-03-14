import { Component, Input } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor() { }

  content = {
    "links": [
      {
        "name": "Faculty",
        "link": "/faculty",
        "sublinks": [
          {
            "name": "Permanent Faculty",
            "link": "/faculty/permanent"
          },
          {
            "name": "Guest Faculty",
            "link": "/faculty/guest"
          },
          {
            "name": "Non-Teaching-Staff",
            "link": "/faculty/non-teaching-staff"
          }
        ]
      }, {
          "name": "Students",
          "link": "/students",
          "sublinks": []
      }, {
        "name": "Vacancies",
        "link": "/vacancies",
        "sublinks": []
      }, {
        "name": "Tenders",
        "link": "/tenders",
        "sublinks": []
      }, {
        "name": "About us",
        "link": "/about",
        "sublinks": []
      }, {
        "name": "Contact",
        "link": "/contact-us",
        "sublinks": []
      }
    ]
  }
}
