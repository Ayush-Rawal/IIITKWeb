import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'non-teaching-staff',
  templateUrl: './non-teaching-staff.component.html',
  styleUrls: ['./non-teaching-staff.component.css']
})
export class NonTeachingStaffComponent implements OnInit {

  constructor(private api:ApiService) { }

  // content = [
  //   {
  //     name: "Mr. Rajendra Saxena",
  //     contact: "9549651177"
  //   }, {
  //     name: "Mr. Parag Somani",
  //     contact: "9549650547"
  //   }, {
  //     name: "Mr. Tej Singh Jatav",
  //     contact: "9549655861"
  //   }, {
  //     name: "Ms. Yagnasenee Suryavanshi",
  //     contact: "9549656097"
  //   }, {
  //     name: "Mr. Pratap Singh",
  //     contact: "9549650189"
  //   }, {
  //     name: "Mr. Banne Singh Bhati",
  //     contact: "9549650589"
  //   }, {
  //     name: "Mr. Mahesh Kumar Sharma",
  //     contact: "9549650517"
  //   }, {
  //     name: "Mr. Satya Narain Gupta",
  //     contact: "9549654702"
  //   }, {
  //     name: "Mr. Satya Narayan Sharma",
  //     contact: "9549651643"
  //   }, {
  //     name: "Mr. Sagar.V.Vakkund",
  //     contact: "9549650168"
  //   }
  // ]

  public content;
  ngOnInit()
  {
    this.api.getData('/api/nonTeachingStaff').subscribe(
      res=>{
       this.content=res.json(); 
      }
    )
  }

}
