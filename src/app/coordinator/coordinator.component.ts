import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'

@Component({
  selector: 'coordinator',
  templateUrl: './coordinator.component.html',
  styleUrls: ['./coordinator.component.css']
})
export class CoordinatorComponent implements OnInit {

  constructor(private api: ApiService) { }

  public content

  ngOnInit () {
    this.api.getData('/api/coordinator')
    .subscribe((res) => this.content = res.json()[0])
  }

}
