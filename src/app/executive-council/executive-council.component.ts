import { Component } from '@angular/core';

@Component({
  selector: 'executive-council',
  templateUrl: './executive-council.component.html',
  styleUrls: ['./executive-council.component.css']
})
export class ExecutiveCouncilComponent {

  constructor() { }

  public content = {
    council: [
      {
        name: "Prof. Uday Kumar Yaragatti, Chairman",
        designation: "Director, MNIT Jaipur"
      }, {
        name: "Shri Manoj Aggarwal",
        designation: "Cairn India Ltd"
      }, {
        name: "Shri Diwakar Singhal",
        designation: "Genpact India"
      }, {
        name: "Shri Rohit Saboo",
        designation: "NEI Ltd"
      }, {
        name: "Shri Dinesh Nandwana",
        designation: "Vakrangee Softwares Ltd."
      }
    ],
    minutes: [
      {
        title: "Minutes of 1st meeting of EC",
        timestamp: "July 24, 2014",
        link: "#"
      }, {
        title: "Minutes of 2nd meeting of EC",
        timestamp: "Oct 13, 2014",
        link: "#"
      }, {
        title: "Minutes of 3rd meeting of EC",
        timestamp: "June 05, 2015",
        link: "#"
      }, {
        title: "Minutes of 4th meeting of EC",
        timestamp: "Feb 15, 2016",
        link: "#"
      }, {
        title: "Minutes of 5th meeting of EC",
        timestamp: "June 27, 2016",
        link: "#"
      }, {
        title: "Minutes of 6th meeting of EC",
        timestamp: "Dec 14, 2016",
        link: "#"
      }, {
        title: "Minutes of 7th meeting of EC",
        timestamp: "June 24, 2017",
        link: "#"
      }
    ]
  }
}
