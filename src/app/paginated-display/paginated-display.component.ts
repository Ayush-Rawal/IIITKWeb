import { Component } from '@angular/core';
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
  animations:[
    trigger('fade',[
      transition('void=>*',[
        style({opacity:0}),
        animate(3500)
      ])
    ])
  ]
})
export class PaginatedDisplayComponent {

  constructor() { }
  public content= {
    title:"Latest News",
    btnDisp:"Gimme More!",
    btnLink:"",
    items:[
      {
        content:"Internships and Placements",
        link:"../students/placement"
      },{
        content:"Institute Scholarships",
        link:"../academics/scholarships"
      },{
        content:"Vidyalaxmi Portal For Education Loan",
         link:"" //don't think we should make a component for this
      },{
        content:"Notice for appointment on deputation basis",
        link:"../vacancies"
      },{
        content:"Advertisement for the 14 Posts of the Director IIIT (PPP) under MHRD",
        link:"../vacancies"
      },{
        content:"Faculty Positions at IIIT-K date extended",
        link:"../vacancies"
      },{
        content:"Orientation Program",
        link:"" //no need of component for it
      },{
        content:"IIIT Kota declared as institute of national importance",
        link:""
      },{
        content:"Guest Faculty",
        link:"../faculty/guest"
      },{
        content:"Content 10",
        link:""
      },{
        content:"Content 11",
        link:""
      },{
        content:"Content 12",
        link:""
      },{
        content:"Content 13",
        link:""
      },{
        content:"Content 14",
        link:""
      },{
        content:"Content 15",
        link:""
      },{
        content:"Content 16",
        link:""
      },{
        content:"Content 17",
        link:""
      },{
        content:"Content 18",
        link:""
      },{
        content:"Content 19",
        link:""
      },{
        content:"Content 20",
        link:""
      },{
        content:"Content 21",
        link:""
      },{
        content:"Content 22",
        link:""
      },{
        content:"Content 23",
        link:""
      },{
        content:"Content 24",
        link:""
      },{
        content:"Content 25",
        link:""
      }
    ]
  }
  
  public currPage = 1;
  public perPage = 6;
  public maxPage = Math.ceil(this.content.items.length/this.perPage);
  public currList = this.content.items.slice((this.currPage-1) * this.perPage, this.currPage * this.perPage);

  changePage = (page) => {
    this.currPage = this.currPage + page;
    this.currList = this.content.items.slice((this.currPage-1) * this.perPage, this.currPage * this.perPage);
  }

}
