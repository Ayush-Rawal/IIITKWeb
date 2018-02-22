import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  content = {
    about: {
      title: "About Us",
      content: "Indian Institute of Information Technology Kota is a joint venture of the Ministry of Human Resource Development, Government of India, Rajasthan Government with Industries in Public-Private Partnership model.\nIIIT Kota admitted the first batch of students in July 2013 and the first batch of 26 students of CSE graduated in May 2017. Institute will have more than 300 students by July 2017. "
    },
    vision: {
      title: "Vision",
      content: "To create a center for imparting technical education of international standards and conduct research at the cutting edge of technology to meet the current and future challenges of technological development. "
    },
    mission: {
      title: "Mission",
      content: "To create technical manpower for meeting the current and future demands of industry: To recognize education and research in close interaction with industry with emphasis on the development of leadership qualities in the young men and women entering the portals of the Institute with sensitivity to social development and eye for opportunities for growth in the international perspective"
    }
  }

}
