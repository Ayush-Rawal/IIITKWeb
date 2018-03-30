import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'senate',
  templateUrl: './senate.component.html',
  styleUrls: ['./senate.component.css']
})
export class SenateComponent implements OnInit{

  constructor(private api:ApiService) { }

  // public content = {
  //   mentor: [
  //     {
  //       name: "Prof. Uday Kumar Yaragatti",
  //       designation: "Chairman 	Director, MNIT Jaipur",
  //     }, {
  //       name: "Dr. Vijay Laxmi",
  //       designation: "Coordinator, IIIT Kota",
  //     }, {
  //       name: "Prof. Manoj Singh Gaur",
  //       designation: "CSE, MNIT Jaipur",
  //     }, {
  //       name: "Dr. Vijay Janyani",
  //       designation: "ECE, MNIT Jaipur",
  //     }, {
  //       name: "Dr. Lava Bhargava",
  //       designation: "ECE, MNIT Jaipur",
  //     }, {
  //       name: "Prof. M.C. Govil",
  //       designation: "CSE, MNIT Jaipur",
  //     }, {
  //       name: "Prof. Vineet Sahula",
  //       designation: "ECE, MNIT Jaipur",
  //     }, {
  //       name: "Prof. Manoj Fozdar",
  //       designation: "EE, MNIT Jaipur",
  //     }, {
  //       name: "Mrs. Nanny Tripathi",
  //       designation: "HSS, MNIT Jaipur",
  //     }, {
  //       name: "Dr. Meenakshi Tripathi",
  //       designation: "CSE, MNIT Jaipur",
  //     }, {
  //       name: "Dr. Preety Bhatt",
  //       designation: "HSS, MNIT Jaipur",
  //     }, {
  //       name: "Dr. Arka Prokash Mazumdar",
  //       designation: "CSE, MNIT Jaipur",
  //     }, {
  //       name: "Dr. Dipti Sharma",
  //       designation: "HSS, MNIT Jaipur",
  //     }
  //   ],
  //   external: [
  //     {
  //       name: "Prof. K. Babu Rao",
  //       designation: "Navyuga Technologies, Hyderabad"
  //     }, {
  //       name: "Prof. Dheeraj Sanghi",
  //       designation: "IIT Kanpur (Currently at IIIT Delhi)"
  //     }, {
  //       name: "Mr. Gaurav Somani",
  //       designation: "CURAJ, Kishangarh, Ajmer"
  //     }, {
  //       name: "Dr. Preety Singh",
  //       designation: "LNMIIT Jaipur"
  //     }, {
  //       name: "Prof. C.V. Jawahar",
  //       designation: "IIIT, Hyderabad"
  //     }, {
  //       name: "Prof. Dhiren Patel",
  //       designation: "SVNIT Surat"
  //     }, {
  //       name: "Prof. Pragati Kumar",
  //       designation: "DTU, New Delhi"
  //     }, {
  //       name: "Prof. J.P. Mishra",
  //       designation: "BITS, Pilani"
  //     }, {
  //       name: "Dr. Giriraj Nyati",
  //       designation: "Chief Operating Officer at Secure Meters Limited"
  //     }, {
  //       name: "Er. Pradeep Gour",
  //       designation: "Director, Lawrence and Mayo Education Group"
  //     }
  //   ],
  //   industry: [
  //     {
  //       name: "Representative",
  //       designation: "Cairn Industries",
  //     }, {
  //       name: "Representative",
  //       designation: "Vakrangee Softwares Ltd.",
  //     }, {
  //       name: "Representative",
  //       designation: "Genpact, India",
  //     }, {
  //       name: "Representative",
  //       designation: "NEI Ltd.",
  //     }
  //   ],
  //   student: [],
  //   minutes: [
  //     {
  //       title: "Minutes of 1st Meeting of the Senate",
  //       link: "/pdf/Senate/Mom-1st-senate.pdf",
  //       timestamp: "Oct 4, 2015"
  //     }, {
  //       title: "Minutes of 2nd Meeting of the Senate",
  //       link: "/pdf/Senate/Mom-2nd-senate.pdf",
  //       timestamp: "June 24, 2017"
  //     }, {
  //       title: "Minutes of 3rd Meeting of the Senate",
  //       link: "/pdf/Senate/Mom-3rd-senate.pdf",
  //       timestamp: "December 2, 2017"
  //     }
  //   ]
  // }

  public content;
  ngOnInit()
  {
    this.api.getData('/api/senate').subscribe(
      res=>{
       this.content=res.json(); 
      }
    )
  }

}
