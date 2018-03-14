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
        name: "Library",
        links: "",
        info: "Institute has a reference section of the best titles relevant to various disciplines – CSE, ECE, Mathematics, Humanity and Social Sciences, etc."
      },
      {
        name: "Digital Library",
        links: "",
        info: "For anytime anywhere access of IP-based subscribed online resources (databases, publications in journals and conferences), we are using RemoteXs solution.\
        Note: Use your LDAP ID and password to login. Do not share your credentials. Access is being monitored. "
      },
      {
        name: "NPTEL",
        links: "",
        info: "You are encouraged to leverage following NPTEL resources:"
      },
      {
        name: "SWAYAM",
        links: "",
        info: "SWAYAM is an initiative by GoI to make some of the best learning resources accessible to all. "
      },
      {
        name: "National Digital Library",
        links: "",
        info: " "
      }
    ]
  }

  ngOnInit() {
  }

}
