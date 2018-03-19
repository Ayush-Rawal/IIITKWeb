import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  window.scrollTo(0,0);
  }

}
