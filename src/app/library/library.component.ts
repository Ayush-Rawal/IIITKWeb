import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  constructor(private api: ApiService) { }

  public content

  ngOnInit() {
    this.api.getData('/api/library')
    .subscribe((res) => this.content = res.json()[0])
    window.scrollTo(0, 0)
  }

}
