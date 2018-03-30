import { ApiService } from './../services/api.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'guest-faculty',
  templateUrl: './guest-faculty.component.html',
  styleUrls: ['./guest-faculty.component.css']
})
export class GuestFacultyComponent implements OnInit {
  
  constructor(private api:ApiService) {}
  
  public content;
  ngOnInit()
  {
    this.api.getData('/api/guestFaculty').subscribe(
      res=>{
       this.content=res.json(); 
      }
    )
  }

}
