import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { Router } from '@angular/router';

@Component({
  selector: 'quick-links',
  templateUrl: './quick-links.component.html',
  styleUrls: ['./quick-links.component.css']
})

export class QuickLinksComponent {
  constructor() { }

  public content = [
      {
        "name": "Vacancies",
        "link": "/vacancies"
      }, {
        "name": "Tenders",
        "link": "/tenders"
      }, {
        "name": "About us",
        "link": "/about"
      }
    ]
    
}
