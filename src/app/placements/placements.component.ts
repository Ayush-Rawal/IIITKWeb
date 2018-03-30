import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'placements',
  templateUrl: './placements.component.html',
  styleUrls: ['./placements.component.css']
})
export class PlacementsComponent implements OnInit {

  constructor(private api:ApiService) { }

  //  public content = [
  //    {
  //      image: "https://placeimg.com/600/600/any",
  //      name: "name",
  //      details: "details details details details ..."
  //    }, {
  //     image: "https://placeimg.com/600/600/any",
  //     name: "name",
  //     details: "details details details details ..."
  //   }, {
  //     image: "https://placeimg.com/600/600/any",
  //     name: "name",
  //     details: "details details details details ..."
  //   }, {
  //     image: "https://placeimg.com/600/600/any",
  //     name: "name",
  //     details: "details details details details ..."
  //   }, {
  //     image: "https://placeimg.com/600/600/any",
  //     name: "name",
  //     details: "details details details details ..."
  //   }, {
  //     image: "https://placeimg.com/600/600/any",
  //     name: "name",
  //     details: "details details details details ..."
  //   }, {
  //     image: "https://placeimg.com/600/600/any",
  //     name: "name",
  //     details: "details details details details ..."
  //   }, {
  //     image: "https://placeimg.com/600/600/any",
  //     name: "name",
  //     details: "details details details details ..."
  //   }, {
  //     image: "https://placeimg.com/600/600/any",
  //     name: "name",
  //     details: "details details details details ..."
  //   }, {
  //     image: "https://placeimg.com/600/600/any",
  //     name: "name",
  //     details: "details details details details ..."
  //   }
  //  ]

  public content;
  ngOnInit()
  {
    this.api.getData('/api/executiveCouncil').subscribe(
      res=>{
       this.content=res.json(); 
      }
    )
  window.scrollTo(0,0);
  }
}
