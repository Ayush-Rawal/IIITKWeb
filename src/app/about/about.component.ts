import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  

  constructor(private api: ApiService) { }

  content

  ngOnInit() {
    this.api.getData('/api/about')
    .subscribe((res) => this.content = res.json()[0])
    window.scrollTo(0,0);
  }

}
