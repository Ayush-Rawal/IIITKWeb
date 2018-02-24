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
        "name": "Link 1",
        "link": "/",
        "sublinks": [
          {
            "name": "Link 1",
            "link": "/"
          },
          {
            "name": "Link 1",
            "link": "/"
          },
          {
            "name": "Link 1",
            "link": "/"
          },
          {
            "name": "Link 1",
            "link": "/"
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
