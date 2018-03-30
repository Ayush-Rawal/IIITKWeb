import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit{

  constructor(private api:ApiService) { }

  // public content = [
  //   {
  //     batch: "CSE, 2013",
  //     link: "/pdf/Students/2013-CSE.pdf"
  //   }, {
  //     batch: "CSE, 2014",
  //     link: "/pdf/Students/2014-CSE.pdf"
  //   }, {
  //     batch: "CSE, 2015",
  //     link: "/pdf/Students/2015-CSE.pdf"
  //   }, {
  //     batch: "ECE, 2015",
  //     link: "/pdf/Students/2015-ECE.pdf"
  //   }, {
  //     batch: "CSE, 2016",
  //     link: "/pdf/Students/2016-CSE.pdf"
  //   }, {
  //     batch: "ECE, 2016",
  //     link: "/pdf/Students/2016-ECE.pdf"
  //   }, {
  //     batch: "CSE, 2017",
  //     link: "/pdf/Students/2017-CSE.pdf"
  //   }, {
  //     batch: "ECE, 2017",
  //     link: "/pdf/Students/2017-ECE.pdf"
  //   }
  // ]

  public content;
  ngOnInit()
  {
    this.api.getData('/api/students').subscribe(
      res=>{
       this.content=res.json(); 
      }
    )
  }

}
