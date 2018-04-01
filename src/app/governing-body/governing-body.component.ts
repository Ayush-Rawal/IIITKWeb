import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'governing-body',
  templateUrl: './governing-body.component.html',
  styleUrls: ['./governing-body.component.css']
})
export class GoverningBodyComponent implements OnInit {

  constructor(private api: ApiService) { }

  content
  ngOnInit() {
    this.api.getData('/api/governingBody')
    .subscribe((res) => this.content = res.json()[0])
  }
}
