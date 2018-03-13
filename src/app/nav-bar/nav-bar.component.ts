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
          },
          {
            "name": "Students",
            "link": "/students"
          }
        ]
      },
      {
        "name": "Admin",
        "link": "/admin",
        "sublinks": [
          {
            "name": "Admin",
            "link": "/admin"
          }, {
            "name": "Admin",
            "link": "/admin"
          }
        ]
      },
      {
        "name": "About us",
        "link": "/about",
        "sublinks": [
          {
            "name": "About",
            "link": "/about"
          }, {
            "name": "About",
            "link": "/about"
          }, {
            "name": "About",
            "link": "/about"
          }
        ]
      }, {
        "name": "Contact",
        "link": "/contact-us",
        "sublinks": [
          {
            "name": "Contact",
            "link": "/contact"
          }, {
            "name": "Contact",
            "link": "/contact"
          }, {
            "name": "Contact",
            "link": "/contact"
          }, {
            "name": "Contact",
            "link": "/contact"
          }
        ]
      }
    ]
  }
}
