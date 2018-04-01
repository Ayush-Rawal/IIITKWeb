import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {
public content

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getData('/api/timetable')
    .subscribe((res) => this.content = res.json()[0])
  }

}
