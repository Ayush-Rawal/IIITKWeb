import { Component } from '@angular/core';

@Component({
  selector: 'paginated-display',
  templateUrl: './paginated-display.component.html',
  styleUrls: ['./paginated-display.component.css']
})
export class PaginatedDisplayComponent {

  constructor() { }
  private content = {
    title:"Title",
    btnDisp:"",
    btnLink:"",
    items:[
      {
        content:"1",
        link:""
      },{
        content:"2",
        link:""
      },{
        content:"3",
        link:""
      },{
        content:"4",
        link:""
      },{
        content:"5",
        link:""
      },{
        content:"6",
        link:""
      },{
        content:"7",
        link:""
      },{
        content:"8",
        link:""
      },{
        content:"9",
        link:""
      },{
        content:"10",
        link:""
      },{
        content:"11",
        link:""
      },{
        content:"12",
        link:""
      }
    ] 
  }
  private currPage = 1;
  private perPage = 6;
  private maxPage = Math.ceil(this.content.items.length/this.perPage);
  private currList = this.content.items.slice((this.currPage-1) * this.perPage, this.currPage * this.perPage);

  changePage = (page) => {
    this.currPage = this.currPage + page;
    console.log("clicked ", "curr page: ", this.currPage)
    console.log("splicing: from:",(this.currPage-1) * this.perPage,"to:",this.currPage * this.perPage)
    this.currList = this.content.items.slice((this.currPage-1) * this.perPage, this.currPage * this.perPage);
  }

}
