import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'placements',
  templateUrl: './placements.component.html',
  styleUrls: ['./placements.component.css']
})
export class PlacementsComponent implements OnInit {

  constructor(private api: ApiService) { }

   public content

  ngOnInit() {
    this.api.getData('/api/placements')
    .subscribe((res) => this.content = res.json())
      window.scrollTo(0, 0)
      }

}
