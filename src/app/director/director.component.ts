import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css']
})
export class DirectorComponent implements OnInit {

  constructor (private api: ApiService) { }
  public content

  ngOnInit () {
    this.api.getData('/api/director')
    .subscribe((res) => this.content = res.json()[0])
  }
}
