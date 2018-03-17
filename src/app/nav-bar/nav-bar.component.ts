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
        name: "Institute",
        link: "institute",
        sublinks: [
          {
            name: "Executive Council",
            link: "/institute/executive-council"
          }, {
            name: "Governing Body",
            link: "/institute/governing-body"
          }, {
            name: "Senate",
            link: "/institute/senate"
          }, {
            name: "Director",
            link: "/institute/director"
          }, {
            name: "Coordinator",
            link: "/institute/coordinator"
          }, {
            name: "Industry Partners",
            link: "/institute/industry-partners"
          }
        ]
      }, {
        name: "Academics",
        link: "/academics",
        sublinks: [
          {
            name: "Departments",
            link: "/academics/departments"
          }, {
            name: "Time Table",
            link: "/academics/timetable"
          }, {
            name: "Curriculum",
            link: "/academics/curriculum"
          }, {
            name: "Scholarships",
            link: "/academics/scholarships"
          }, {
            name: "Library",
            link: "/academics/library"
          }, {
            name: "Events",
            link: "/academics/institute-events"
          }
        ]
      }, {
        "name": "Faculty",
        "link": "/faculty",
        "sublinks": [
          {
            "name": "Contract Faculty",
            "link": "/faculty/contract"
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
          "sublinks": [
            {
              name: "Current Batches",
              link: "/students/current-batches"
            }, {
              name: "Placements",
              link: "/students/placements"
            }
          ]
      }, {
        "name": "Contact Us",
        "link": "/contact-us",
        "sublinks": []
      }
    ]
  }
}
