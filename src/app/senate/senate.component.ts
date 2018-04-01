import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'senate',
  templateUrl: './senate.component.html',
  styleUrls: ['./senate.component.css']
})
export class SenateComponent implements OnInit {

  constructor(private api: ApiService) { }

  public content

  ngOnInit() {
    this.api.getData('/api/senate')
    .subscribe((res) => this.content = res.json()[0])
  }
}
