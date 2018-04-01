import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'quick-links',
  templateUrl: './quick-links.component.html',
  styleUrls: ['./quick-links.component.css']
})

export class QuickLinksComponent implements OnInit {
  constructor(private api: ApiService) { }

  public content

  ngOnInit() {
    this.api.getData('/api/quickLinks')
    .subscribe((res) => this.content = res.json()[0].links)
  }

}
