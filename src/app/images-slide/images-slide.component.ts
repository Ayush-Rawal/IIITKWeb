import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'images-slide',
  templateUrl: './images-slide.component.html',
  styleUrls: ['./images-slide.component.css']
})
export class ImagesSlideComponent  {

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = true;
  }


}
