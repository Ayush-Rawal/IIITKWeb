import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'institute-events',
  templateUrl: './institute-events.component.html',
  styleUrls: ['./institute-events.component.css']
})
export class InstituteEventsComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 2500
    config.wrap = true
    config.keyboard = true
  }

  public content = {
    carousel: [
      {
        imgsrc: "./../../assets/runforunity1.jpg",
        headline: "Run For Unity",
        summary: "Rashtriya Ektah Saptah - Oct 31 to Nov 5,2016"
      },
      {
        imgsrc: "http://www.iiitkota.ac.in/wp-content/uploads/2017/01/RepublicDay.jpg",
        headline: "68th Republic Day",
        summary: "IIIT Kota celebrated 68th Republic Day with mentor institute MNIT Jaipur. Director Prof. Uday Kumar Yaragatti addressed students, faculty and staff. He motivated students to work for excellence and towards the betterment of the country."
      },
      {
        imgsrc: "http://www.iiitkota.ac.in/wp-content/uploads/2016/08/mnit_iday.jpg",
        headline: "70th Independence Day Celebration",
        summary: "IIIT Kota celebrated 70th Independence Day with mentor institute MNIT Jaipur. IIIT Kota celebrated this day with kids of Government School in MNIT Campus and distributed sweets.",
      }
    ],
    iconic: [
      {
        icon: "http://www.iiitkota.ac.in/wp-content/uploads/2016/12/NAshokan_Nov21-25.jpg",
        heading: "GIAN Course: Mobile Systems Security (Nov 21-25, 2016)",
        details: "Department of Computer Science and Engineering, MNIT Jaipur organized an International Short Course on Mobile Systems Security under GIAN (Global Initiative of Academic Network), an initiative of MHRD, Govt. of India. This course was organized during November 21 &#8211; 25, 2016. This program was also partially supported by IIIT Kota (currently mentored by MNIT Jaipur)."
      },
      {
        icon: "http://www.iiitkota.ac.in/wp-content/uploads/2016/12/Kothari_Sept12-16.jpg",
        heading: "GIAN Course: Managing The Complexity, Security, And Safety Of Large Software (Sept 12-16, 2016)",
        details: "Professor Suraj Kothari from Iow State University, USA and Ben Holland were main resource persons for this course. This	course provided a solid foundation on fundamentals of software that are applicable across all programming languages. With examples of real-world software problems, course elaborated how this fundamental knowledge can be applied using HLA (human-in-loop automation) to cope with software complexity, safety and security. Both visiting faculty gave a thoughtful talk on &#8220;Euler and 336 Million Dollars Software Patent&#8221;. "
      }
    ],
    complete: [
      {
        imgsrc: "./../../assets/iiit_sports_meet_cricket.jpg",
        heading: "IIIT-Kota at Kanchipuram ",
        followup: "II Runner Ups",
        summary: "IIIT Kota stands 3rd overall at Inter IIIT Sports Meet – 2016 .Students of IIIT Kota participated at Inter IIIT Sports Meet – 2016 held at IIITDM Kancheepuram during Dec 13-15, 2016.Team IIIT Kota ranked 3rd overall and institute is proud of this achievement. Total 34 students participated in various games"
      },
      {
        imgsrc: "http://www.iiitkota.ac.in/wp-content/uploads/2016/08/GEWIS_II.jpg",
        heading: "Visit of GEWIS study tour 2016 from TU/e Netherlands",
        followup: "",
        summary: "Dr. Vijay Laxmi and Rajendra Solanki interacted with the group and answered questions about institute, academics and admissions (both MNIT and IIITK). Amit Kumar demonstrated stick for blind people developed in summer project by 2 visiting students from Thapar University. "
      },
      {
        imgsrc:"",
        heading:"",
        followup:"",
        summary:""
      }
    ]
  }


  ngOnInit() {
    // this.api.getData('/api/events').subscribe(
    //   res=>{
    //     this.content=res.json();
    //   }
    // )
  }

}
