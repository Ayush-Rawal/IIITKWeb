import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'executive-council',
  templateUrl: './executive-council.component.html',
  styleUrls: ['./executive-council.component.css']
})
export class ExecutiveCouncilComponent implements OnInit {

  constructor(private api: ApiService) { }

  public content

  ngOnInit() {
    this.api.getData('/api/executiveCouncil')
    .subscribe((res) => this.content = res.json()[0])
  }
}
