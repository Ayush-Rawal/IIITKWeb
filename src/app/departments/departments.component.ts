import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit{

  constructor(private api:ApiService) { }

  // public content = {
  //   departments: [
  //     {
  //       name: "Computer Science and Engineering",
  //       start: "Department of Computer Science and Engineering at IIIT Kota started functioning from July 2013.",
  //       info: "Currently, the department offers a four-year course leading to Bachelor’s Degree in Computer Science and Engineering\
  //       . The department is benefited from distinguished faculty of CSE department at MNIT Jaipur, our mentor institute\
  //       . Department is in the process to get state-of-the-art labs to support the undergraduate program better. "
  //     },
  //     {
  //       name: "Electronics and Communication Engineering",
  //       start: "Department of Electronics and Communication Engineering at IIIT Kota started functioning from July 2015.",
  //       info: "Currently, the department offers a four-year course leading to Bachelor’s Degree in Electronics and Communications Engineering\
  //       . The department is benefited from distinguished faculty of ECE department at MNIT Jaipur, our mentor institute\
  //       . Department is in the process to get state-of-the-art labs to support the undergraduate program better. "
  //     }
  //   ]
  // }
  public content;
  ngOnInit()
  {
  this.api.getData('/api/departments').subscribe(
    res=>{
      console.log(res.json()),
      this.content=res.json();
    }
  );
  }

}
