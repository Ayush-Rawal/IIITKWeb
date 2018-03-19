import { Component } from '@angular/core';
@Component({
  selector: 'students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
<<<<<<< HEAD
export class StudentsComponent {

  constructor() { }

  public content = [
    {
      batch: "CSE, 2013",
      link: "/pdf/Students/2013-CSE.pdf"
    }, {
      batch: "CSE, 2014",
      link: "/pdf/Students/2014-CSE.pdf"
    }, {
      batch: "CSE, 2015",
      link: "/pdf/Students/2015-CSE.pdf"
    }, {
      batch: "ECE, 2015",
      link: "/pdf/Students/2015-ECE.pdf"
    }, {
      batch: "CSE, 2016",
      link: "/pdf/Students/2016-CSE.pdf"
    }, {
      batch: "ECE, 2016",
      link: "/pdf/Students/2016-ECE.pdf"
    }, {
      batch: "CSE, 2017",
      link: "/pdf/Students/2017-CSE.pdf"
    }, {
      batch: "ECE, 2017",
      link: "/pdf/Students/2017-ECE.pdf"
    }
  ]
=======
export class StudentsComponent implements OnInit {
  res:any[];
  constructor(http:Http) {
    http.get("http://jsonplaceholder.typicode.com/photos").subscribe(response=>{
      this.res=response.json();
    }); //end point for displaying the students pdf link
   }
  ngOnInit() {
      window.scrollTo(0,0);
      }
>>>>>>> 3c20512... done the above stuff mentioned

}
