import { AboutBarComponent } from './about-bar/about-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
<<<<<<< HEAD
import { ImagesSlideComponent } from './images-slide/images-slide.component';
=======
import { NavBarComponent } from './nav-bar/nav-bar.component';
>>>>>>> 043b6acbc82a24678a30fcdb716427cae952d633


@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
<<<<<<< HEAD
    AboutBarComponent,
    ImagesSlideComponent
=======
    NavBarComponent
>>>>>>> 043b6acbc82a24678a30fcdb716427cae952d633
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'admin', component:AdminPageComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
