import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'

@Component({
  selector: 'coordinator',
  templateUrl: './coordinator.component.html',
  styleUrls: ['./coordinator.component.css']
})
export class CoordinatorComponent implements OnInit {

  constructor(private api: ApiService) { }

  public content = {
    coordinator: {
      name: "Dr. Rakesh Jain",
      email: "rjain.mnit@gmail.com",
      office: ["Coordinator, IIIT Kota,",
              "Dept. of Mechanical Engineering,MNIT Jaipur"],
      education: ["Ph.D.(Operations Management) from Liverpool John Moores University, Liverpool, UK",
                  "M.E.(Industrial Engg.) from National Institute of Industrial Engineering",
                  "B.E.(Mechanical Engineering) from University of Rajsthan"],
      phone: "0141-2715080",
      website: "http://www.mnit.ac.in/faculty/profile.php?fid=40",
      tenure: "January 2018 on wards"
    },
    prevCoordinator: [
      {
        name: "Prof. Vijay Laxmi",
        tenure: "June 2017 to December 2017"
      }, {
        name: "Manoj Singh Gaur",
        tenure: "May 2015 to June 2017"
      }, {
        name: "Prof. Mahesh Chandra Govil",
        tenure: "July 2013 to April 2015"
      }
    ]
  }

  ngOnInit () {
    this.api.getData('/api/coordinator')
    .subscribe((res) => this.content = res.json()[0])
  }

}
