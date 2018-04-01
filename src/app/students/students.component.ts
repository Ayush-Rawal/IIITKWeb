import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private api: ApiService) { }

  public content

  ngOnInit() {
    this.api.getData('/api/students')
    .subscribe((res) => this.content = res.json()[0].students)
  }

}
