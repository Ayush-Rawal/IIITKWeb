import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  constructor() { }

  public content = {
    library: [
      {
        name: "Digital Library",
        links: [
          {
            name: "RemoteXs",
            link: "http://mnitj.remotexs.in/"
          }
        ],
        info: "For anytime anywhere access of IP-based subscribed online resources (databases, publications in journals and conferences), we are using RemoteXs solution.\
        Note: Use your LDAP ID and password to login. Do not share your credentials. Access is being monitored. "
      },
      {
        name: "NPTEL",
        links: [
          {
            name: "CSE Courses at NPTEL",
            link: "http://nptel.ac.in/course.php?disciplineId=106"
          }, {
            name: "ECE Courses at NPTEL",
            link: "http://nptel.ac.in/course.php?disciplineId=117"
          }
        ],
        info: "You are encouraged to leverage following NPTEL resources:"
      },
      {
        name: "SWAYAM",
        links: [
          {
            name: "SWAYAM",
            link: "https://swayam.gov.in/About"
          }, {
            name: "SWAYAM portal for undergrads",
            link: "https://swayam.gov.in/Undergraduate"
          }
        ],
        info: "SWAYAM is an initiative by GoI to make some of the best learning resources accessible to all. "
      },
      {
        name: "National Digital Library",
        links: [
          {
            name: "National Digital Library",
            link: "https://ndl.iitkgp.ac.in/"
          }
        ],
        info: " "
      }
    ]
  }

  ngOnInit() {
    window.scrollTo(0,0);
  }

}
