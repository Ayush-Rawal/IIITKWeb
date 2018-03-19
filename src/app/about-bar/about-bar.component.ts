import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { Router } from '@angular/router';

const states = ['About-us','Contact-Us','Students','Placement','Fee Structure','Admissions','Library','Curriculum','Scholarships'];
@Component({
  selector: 'about-bar',
  templateUrl: './about-bar.component.html',
  styleUrls: ['./about-bar.component.css']
})
export class AboutBarComponent{
 
  constructor(public router:Router) { }

    routing(model:string)
    { 
      model=model.toLowerCase();
      if(model=="admin")
      this.router.navigate(['../admin']);
      
      else if(model=="about-us")
      this.router.navigate(['../about']);

      else if(model=="contact-us")
      this.router.navigate(['contact-us']);

      
      else if(model=="students")
      this.router.navigate(['../students/current-batches']);

      
      else if(model=="placement")
      this.router.navigate(['../students/placement']);

      
      else if(model=="fee structure")
      this.router.navigate(['../institute/fees-registration']);

      
      else if(model=="admissions")
      this.router.navigate(['../institute/admissions']);

      
      else if(model=="library")
      this.router.navigate(['../academics/library']);

      else if(model=="curriculum")
      this.router.navigate(['../academics/curriculum']);

      else if(model=="scholarships")
      this.router.navigate(['../academics/scholarships']);

      else
      {
        this.router.navigate(['**']);
      }
      

    }
  public model: any;
  
  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 1 ? []
        : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));


}
