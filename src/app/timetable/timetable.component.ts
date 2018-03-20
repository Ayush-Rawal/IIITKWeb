import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {
public content =
  {
   "timetable":
            { 
              "name":"Time-Table 2017-18 Even Semester",
              "link":"",
              "lastupdate":"Last updated on March 7",
            },
   "calendar":
            [
              {
              "name":"IIIT-Kota Academic Calendar 2017-18 Odd Semester",
              "link":"",  
            },
            {
              "name":"IIIT-Kota Academic Calendar 2017-18 Even Semester",
              "link":"",  
            },
            {
              "name":"MNIT Academic Calendar - 2017-18(for reference)",
              "link":"",  
            }
          ]         
  }

  constructor() { }

  ngOnInit() {
  }

}
