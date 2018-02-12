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
                            "name": "Link 1jkjkshdkjasbfknhjkadfjkbhhjghcfgcjhnkbvcxdfghjkmnbvcfghjkmnbvcghjklkjhgfddfghjkjbvbnm",
                            "link": "/"
                          },
          {
            "name": "Link 1",
            "link": "/"
          }
        ]
      },
      {
        "name": "Link 2",
        "link": "/admin",
        "sublinks": [
          {
            "name": "Link 2",
            "link": "/admin"
          }, {
            "name": "Link 2",
            "link": "/admin"
          }
        ]
      },
      {
        "name": "Link 3",
        "link": "/about",
        "sublinks": [
          {
            "name": "Link 3",
            "link": "/about"
          }, {
            "name": "Link 3",
            "link": "/about"
          }, {
            "name": "Link 3",
            "link": "/about"
          }
        ]
      },{
        "name": "Link 4",
        "link": "/contact",
        "sublinks": [
          {
            "name": "Link 4",
            "link": "/contact"
          }, {
            "name": "Link 4",
            "link": "/contact"
          }, {
            "name": "Link 4",
            "link": "/contact"
          }, {
            "name": "Link 4",
            "link": "/contact"
          }
        ]
      }
    ]
  }
}
