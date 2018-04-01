import { Component, Input, OnChanges } from '@angular/core';
import {
  style,
  trigger,
  transition,
  animate,
  state
} from '@angular/animations';

@Component({
  selector: 'paginated-display',
  templateUrl: './paginated-display.component.html',
  styleUrls: ['./paginated-display.component.css'],
  animations: [
    trigger('fade', [
      transition('void=>*', [
        style({opacity: 0}),
        animate(3500)
      ])
    ])
  ]
})
export class PaginatedDisplayComponent implements OnChanges {

  constructor() {
   }
  @Input('content') inp
  public content = this.inp || {
    items: []
  }
  public currPage = 1
  public perPage = 6
  public maxPage = Math.ceil(this.content.items.length / this.perPage) || 1
  public currList = this.content.items.slice((this.currPage - 1) * this.perPage, this.currPage * this.perPage) || []

  changePage = (page) => {
    this.currPage = this.currPage + page
    this.currList = this.content.items.slice((this.currPage - 1) * this.perPage, this.currPage * this.perPage)
  }

  ngOnChanges() {
    if (this.inp) {
      this.content = this.inp
      this.maxPage = Math.ceil(this.content.items.length / this.perPage)
      this.currList = this.content.items.slice((this.currPage - 1) * this.perPage, this.currPage * this.perPage)
    }
  }

}
