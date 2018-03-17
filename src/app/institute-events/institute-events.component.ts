import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'institute-events',
  templateUrl: './institute-events.component.html',
  styleUrls: ['./institute-events.component.css']
})
export class InstituteEventsComponent implements OnInit {

  constructor() { }
  public content1 = {
    events: [
      { 
        imgsrc:"",
        headline: "",
        summary: ""
      },
      { 
        imgsrc:"",
        headline: "",
        summary: ""
      },
      {
        imgsrc:"",
        headline: "",
        summary: ""
      },
      {
        imgsrc:"",
        headline: "",
        summary: ""
      }
    ]
  }
  public content2 = {
    events: [
      {
        icon:"",
        heading: "",
        details: ""
      },
      {
        icon:"",
        heading: "",
        details: ""
      },
      {
        icon:"",
        heading: "",
        details: ""
      },
      {
        icon:"",
        heading: "",
        details: ""
      }
    ]
  }
  public content3 = {
    events: [
     {
       imgsrc:"",
       heading:"",
       followup:"",
       summary:""
     },
     {
      imgsrc:"",
      heading:"",
      followup:"",
      summary:""
    },
    {
      imgsrc:"",
      heading:"",
      followup:"",
      summary:""
    },
    {
      imgsrc:"",
      heading:"",
      followup:"",
      summary:""
    }
    ]
  }
  ngOnInit() {
  }

}
