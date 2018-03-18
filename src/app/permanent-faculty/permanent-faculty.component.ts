import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'permanent-faculty',
  templateUrl: './permanent-faculty.component.html',
  styleUrls: ['./permanent-faculty.component.css']
})
export class PermanentFacultyComponent {

  constructor() { }

  content = [
    {
      name: "Dr. Pooja Jain",
      department: "CSE",
      contact: "9549650438"
    }, {
      name: "Dr. Tapan Kumar Jain",
      department: "ECE",
      contact: "9549650206"
    }, {
      name: "Dr. Smita Naval",
      department: "CSE",
      contact: "9549651074"
    }, {
      name: "Dr. Amit Kumar",
      department: "CSE",
      contact: "9549655278"
    }, {
      name: "Dr. Parikshit Singh",
      department: "ECE",
      contact: "9549659156"
    }, {
      name: "Dr. Neeraj Rao",
      department: "ECE",
      contact: "9549651197"
    }, {
      name: "Dr. Kalpana Naidu",
      department: "ECE",
      contact: "9549650388"
    }, {
      name: "Dr. Sangeeta Singh",
      department: "ECE",
      contact: "9549651479"
      }, {
      name: "Dr. Vinita Tiwari",
      department: "ECE",
      contact: "9549654678"
    }
  ]

}
