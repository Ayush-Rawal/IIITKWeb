import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'institute-events',
  templateUrl: './institute-events.component.html',
  styleUrls: ['./institute-events.component.css']
})
export class InstituteEventsComponent implements OnInit {

  constructor(config: NgbCarouselConfig, private api: ApiService) {
    config.interval = 2500
    config.wrap = true
    config.keyboard = true
  }

  public content


  ngOnInit() {
    this.api.getData('/api/events')
    .subscribe( (res) => this.content = res.json()[0])
  }

}
