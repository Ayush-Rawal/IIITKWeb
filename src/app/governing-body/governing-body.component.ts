import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'governing-body',
  templateUrl: './governing-body.component.html',
  styleUrls: ['./governing-body.component.css']
})
export class GoverningBodyComponent implements OnInit {

  constructor(private api:ApiService) { }

  // content = {
  //   executives: [
  //     {
  //       name: "Chief Secretary, Govt. of Rajasthan, Secretariat, Jaipur",
  //       designation: "Chairperson"
  //     }, {
  //       name: "Principal Secretary, Technical Education, Government of Rajasthan, Secretariat, Jaipur",
  //       designation: "Member-Secretary"
  //     }, {
  //       name: "Addl. Secretary, Tech. Edn., MHRD, Shastri Bhawan, New Delhi",
  //       designation: "Member"
  //     }, {
  //       name: "Financial Advisor, MHRD, Shastri Bhawan, New Delhi",
  //       designation: "Member"
  //     }, {
  //       name: "Director, MHRD, Shastri Bhawan, New Delhi",
  //       designation: "Member"
  //     }, {
  //       name: "Prof. Uday Kumar Yaragatti, Director, MNIT, Jaipur",
  //       designation: "Member"
  //     }, {
  //       name: "Prof. Madhusudan Sharma, Vice Chancellor, Kota University, Kota, Rajasthan",
  //       designation: "Member"
  //     }, {
  //       name: "Shri Rohit Saboo, CEO, National Engineering Industries Ltd., Khatipura Road, Jaipur",
  //       designation: "Member"
  //     }, {
  //       name: "Shri P. Elango, CEO of Carin India Ltd., 4th Floor Vipul Plaza, Sun City , Sector -54, Gurgaon-122002",
  //       designation: "Member"
  //     }, {
  //       name: "Shri Diwakar Singhal, Genpact India, Senior Vice President & Business Leader, Genpect, J.L.N. Marg, Jaipur",
  //       designation: "Member"
  //     }, {
  //       name: "Shri Dinesh Nandwana, Chairman And Managing Director, Vakrangee Softwares Limited",
  //       designation: "Member"
  //     }, {
  //       name: "Shri Shankar Annaswamy, Senior Advisor, India Enterprise IBM India/South Asia",
  //       designation: "Member"
  //     }
  //   ],
  //   minutes: [
  //     {
  //       title: "Minutes of 1st meeting of the Governing Body",
  //       link: "/pdf/Governing-Body/MoM-of-1st-GB.pdf",
  //       timestamp: "June 6, 2013"
  //     }, {
  //       title: "Minutes of 2nd meeting of the Governing Body",
  //       link: "/pdf/Governing-Body/MoM-of-2nd-GB.pdf",
  //       timestamp: "July 9, 2014"
  //     }, {
  //       title: "Minutes of 3rd meeting of the Governing Body",
  //       link: "/pdf/Governing-Body/MoM-of-3rd-GB.pdf",
  //       timestamp: "March 27, 2017"
  //     }
  //   ]
  // }

  public content;
  ngOnInit()
  {
    this.api.getData('/api/governingBody').subscribe(
      res=>{
       this.content=res.json(); 
      }
    )
  }
}
