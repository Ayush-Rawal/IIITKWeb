import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private api: ApiService) { }

  content
  ngOnInit() {
    this.api.getData('/api/navbar')
    .subscribe((res) => this.content = res.json()[0])
  }
}
