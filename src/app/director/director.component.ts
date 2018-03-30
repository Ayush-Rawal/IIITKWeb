import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css']
})
export class DirectorComponent implements OnInit {

// TODO: Format office address into multiple lines

  constructor(private api:ApiService) { }
  // public content = {
  //   director: {
  //     name: "Prof. Uday Kumar Yaragatti",
  //     office: ["Director, MNIT Jaipur",
  //     "1st Floor, Prabha Bhawan",
  //     "MNIT Jaipur, JLN Marg, Jaipur – 302017"],
  //     phone: "+91 141 2529087",
  //     email: "director@mnit.ac.in",
  //     website: "http://mnit.ac.in/admin/director.php",
  //     tenure: "from July 2016 on wards"
  //   },
  //   prevDirector: {
  //     name: "Prof. I. K. Bhatt",
  //     office: "former Director, MNIT Jaipur",
  //     email: "ikbhat@rediffmail.com",
  //     tenure: "from July 2013 to June 2016"
  //   }
  // }
  public content;
  ngOnInit()
  {
    this.api.getData('/api/director').subscribe(
      res=>
      {
        this.content=res.json();
      }
    );
  }
}
