import { AboutBarComponent } from './about-bar/about-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ImagesSlideComponent } from './images-slide/images-slide.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
<<<<<<< HEAD
import { QuickLinksComponent } from './quick-links/quick-links.component';
import { QuickContactUsComponent } from './quick-contact-us/quick-contact-us.component';
=======
import { PaginatedDisplayComponent } from './paginated-display/paginated-display.component';
>>>>>>> beb797b15c751cbd9eee8ba42a38c24cd48c68bd


@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    AboutBarComponent,
    ImagesSlideComponent,
    NavBarComponent,
<<<<<<< HEAD
    QuickLinksComponent,
    QuickContactUsComponent
=======
    PaginatedDisplayComponent
>>>>>>> beb797b15c751cbd9eee8ba42a38c24cd48c68bd
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'admin', component:AdminPageComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
