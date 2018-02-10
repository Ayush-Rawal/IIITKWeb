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
        "display": "Link 1",
        "link": "/",
        "sublinks": [
          {
            "display": "Link 1",
            "link": "/"
          },
          {
            "display": "Link 1",
            "link": "/"
          },
          {
            "display": "Link 1",
            "link": "/"
          },
          {
            "display": "Link 1",
            "link": "/"
          }
        ]
      },
      {
        "display": "Link 2",
        "link": "/admin",
        "sublinks": [
          {
            "display": "Link 2",
            "link": "/admin"
          }, {
            "display": "Link 2",
            "link": "/admin"
          }
        ]
      },
      {
        "display": "Link 3",
        "link": "/about",
        "sublinks": [
          {
            "display": "Link 3",
            "link": "/about"
          }, {
            "display": "Link 3",
            "link": "/about"
          }, {
            "display": "Link 3",
            "link": "/about"
          }
        ]
      },{
        "display": "Link 4",
        "link": "/contact",
        "sublinks": [
          {
            "display": "Link 4",
            "link": "/contact"
          }, {
            "display": "Link 4",
            "link": "/contact"
          }, {
            "display": "Link 4",
            "link": "/contact"
          }, {
            "display": "Link 4",
            "link": "/contact"
          }
        ]
      }
    ]
  }
}
