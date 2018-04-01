import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  constructor(private api: ApiService) { }

  public content

  ngOnInit () {
    this.api.getData('/api/departments')
    .subscribe((res) => this.content = res.json()[0])
  }

}
