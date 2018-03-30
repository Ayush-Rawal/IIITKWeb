import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'quick-links',
  templateUrl: './quick-links.component.html',
  styleUrls: ['./quick-links.component.css']
})

export class QuickLinksComponent implements OnInit{
  constructor(private api:ApiService) { }

  // public content = [
  //     {
  //       "name": "Vacancies",
  //       "link": "/vacancies"
  //     }, {
  //       "name": "Tenders",
  //       "link": "/tenders"
  //     }, {
  //       "name": "About us",
  //       "link": "/about"
  //     }
  //   ]

  public content;
  ngOnInit()
  {
    this.api.getData('/api/executiveCouncil').subscribe(
      res=>{
       this.content=res.json(); 
      }
    )
  }
}
