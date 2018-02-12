import { Component } from '@angular/core';

@Component({
  selector: 'paginated-display',
  templateUrl: './paginated-display.component.html',
  styleUrls: ['./paginated-display.component.css']
})
export class PaginatedDisplayComponent {

  constructor() { }
  public content = {
    title:"Title",
    btnDisp:"Gimme More!",
    btnLink:"",
    items:[
      {
        content:"Content 1",
        link:""
      },{
        content:"Content 2",
        link:""
      },{
        content:"Content 3",
        link:""
      },{
        content:"Content 4",
        link:""
      },{
        content:"Content 5",
        link:""
      },{
        content:"Content 6",
        link:""
      },{
        content:"Content 7",
        link:""
      },{
        content:"Content 8",
        link:""
      },{
        content:"Content 9",
        link:""
      },{
        content:"Content 10",
        link:""
      },{
        content:"Content 11",
        link:""
      },{
        content:"Content 12",
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
    console.log("clicked ", "curr page: ", this.currPage)
    console.log("splicing: from:",(this.currPage-1) * this.perPage,"to:",this.currPage * this.perPage)
    this.currList = this.content.items.slice((this.currPage-1) * this.perPage, this.currPage * this.perPage);
  }

}
