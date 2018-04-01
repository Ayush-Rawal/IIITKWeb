import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api: ApiService) { }

  public content
  ngOnInit() {
    this.api.getData('/api/home')
    .subscribe((res) => {
      this.content = res.json()[0]
    })
  }

}
