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
      }, {
        imgsrc: "./../../assets/RepublicDay.jpg",
        headline: "68th Republic Day",
        summary: "IIIT Kota celebrated 68th Republic Day with mentor institute MNIT Jaipur. Director Prof. Uday Kumar Yaragatti addressed students, faculty and staff. He motivated students to work for excellence and towards the betterment of the country."
      }, {
        imgsrc: "./../../assets/mnit_iday.jpg",
        headline: "70th Independence Day Celebration",
        summary: "IIIT Kota celebrated 70th Independence Day with mentor institute MNIT Jaipur. IIIT Kota celebrated this day with kids of Government School in MNIT Campus and distributed sweets.",
      }
    ],
    iconic: [
      {
        icon: "./../../assets/NAshokan_Nov21-25.jpg",
        heading: "GIAN Course: Mobile Systems Security (Nov 21-25, 2016)",
        details: "Department of Computer Science and Engineering, MNIT Jaipur organized an International Short Course on Mobile Systems Security under GIAN (Global Initiative of Academic Network), an initiative of MHRD, Govt. of India. This course was organized during November 21 - 25, 2016. This program was also partially supported by IIIT Kota (currently mentored by MNIT Jaipur)."
      }, {
        icon: "./../../assets/Kothari_Sept12-16.jpg",
        heading: "GIAN Course: Managing The Complexity, Security, And Safety Of Large Software (Sept 12-16, 2016)",
        details: "Professor Suraj Kothari from Iowa State University, USA and Ben Holland were main resource persons for this course. This	course provided a solid foundation on fundamentals of software that are applicable across all programming languages. With examples of real-world software problems, course elaborated how this fundamental knowledge can be applied using HLA (human-in-loop automation) to cope with software complexity, safety and security. Both visiting faculty gave a thoughtful talk on Euler and 336 Million Dollars Software Patent. "
      }, {
        icon: "./../../assets/gusto_jabalpur.jpg",
        heading: "Students of IIIT Kota participated in Gusto 2017 held at IIITDM, Jabalpur during January 27-29, 2017.",
        details: "Total 38 students participated in various games (Athletics, Badminton, Chess, Cricket, Table Tennis and Carrom)."
      }
    ],
    complete: [
      {
        imgsrc: "./../../assets/iiit_sports_meet_cricket.jpg",
        heading: "IIIT-Kota at Kanchipuram ",
        followup: "II Runner Ups",
        summary: "IIIT Kota stands 3rd overall at Inter IIIT Sports Meet – 2016 .Students of IIIT Kota participated at Inter IIIT Sports Meet – 2016 held at IIITDM Kancheepuram during Dec 13-15, 2016.Team IIIT Kota ranked 3rd overall and institute is proud of this achievement. Total 34 students participated in various games"
      }, {
        imgsrc: "./../../assets/GEWIS_II.jpg",
        heading: "Visit of GEWIS study tour 2016 from TU/e Netherlands",
        followup: "",
        summary: "Dr. Vijay Laxmi and Rajendra Solanki interacted with the group and answered questions about institute, academics and admissions (both MNIT and IIITK). Amit Kumar demonstrated stick for blind people developed in summer project by 2 visiting students from Thapar University. "
      }, {
        imgsrc: "./../../assets/KAL_1550.jpg",
        heading: "IIITK New Students’ Foundation Program (Orientation)",
        followup: " Aug 1-6, 2016",
        summary: "IIIT Kota welcomed all new students admitted to session 2016-17, during one week long Foundation Program (orientation) from August 1-to-6, 2016 at MNIT Jaipur campus."
      }, {
        imgsrc: "./../../assets/GIAN_VLSI.jpg",
        heading: "GIAN Course: Recent Advances In VLSI Testing And Design-For-Test",
        followup: "July 25-29, 2016",
        summary: "Department of Computer Science & Engineering and Electronics and Communication Engineering at MNIT jointly organized an International Short Course on Recent Advances in VLSI Testing and Design-for-Test: Timing Tests, Test Compression, Cell Aware Test and Adaptive under GIAN (Global Initiative of Academic Network), an initiative of MHRD, Govt. of India. This course was organized during July 25-29, 2016. This program was also partially supported by IIIT Kota (currently mentored by MNIT Jaipur)."
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
