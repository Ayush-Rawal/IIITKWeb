import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'placements',
  templateUrl: './placements.component.html',
  styleUrls: ['./placements.component.css']
})
export class PlacementsComponent implements OnInit {

  constructor() { }

   public content = [
     {
       image: "https://placeimg.com/600/600/any",
       name: "name",
       details: "details details details details ..."
     }, {
      image: "https://placeimg.com/600/600/any",
      name: "name",
      details: "details details details details ..."
    }, {
      image: "https://placeimg.com/600/600/any",
      name: "name",
      details: "details details details details ..."
    }, {
      image: "https://placeimg.com/600/600/any",
      name: "name",
      details: "details details details details ..."
    }, {
      image: "https://placeimg.com/600/600/any",
      name: "name",
      details: "details details details details ..."
    }, {
      image: "https://placeimg.com/600/600/any",
      name: "name",
      details: "details details details details ..."
    }, {
      image: "https://placeimg.com/600/600/any",
      name: "name",
      details: "details details details details ..."
    }, {
      image: "https://placeimg.com/600/600/any",
      name: "name",
      details: "details details details details ..."
    }, {
      image: "https://placeimg.com/600/600/any",
      name: "name",
      details: "details details details details ..."
    }, {
      image: "https://placeimg.com/600/600/any",
      name: "name",
      details: "details details details details ..."
    }
   ]

  ngOnInit() {
      window.scrollTo(0,0);
      }

}
