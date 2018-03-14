import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutBarComponent } from './about-bar/about-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ImagesSlideComponent } from './images-slide/images-slide.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { QuickLinksComponent } from './quick-links/quick-links.component';
import { QuickContactUsComponent } from './quick-contact-us/quick-contact-us.component';
import { PaginatedDisplayComponent } from './paginated-display/paginated-display.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StudentsComponent } from './students/students.component';
import { PermanentFacultyComponent } from './permanent-faculty/permanent-faculty.component';
import { GuestFacultyComponent } from './guest-faculty/guest-faculty.component';
import { NonTeachingStaffComponent } from './non-teaching-staff/non-teaching-staff.component';
import { PlacementsComponent } from './placements/placements.component';
// import { VacanciesComponent } from './vacancies/vacancies.component';
import { TendersComponent } from './tenders/tenders.component';
import { ExecutiveCouncilComponent } from './executive-council/executive-council.component';
import { GoverningBodyComponent } from './governing-body/governing-body.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    AboutBarComponent,
    ImagesSlideComponent,
    NavBarComponent,
    QuickLinksComponent,
    QuickContactUsComponent,
    PaginatedDisplayComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    StudentsComponent,
    PermanentFacultyComponent,
    GuestFacultyComponent,
    NonTeachingStaffComponent,
    PlacementsComponent,
    // VacanciesComponent,
    TendersComponent,
    ExecutiveCouncilComponent,
    GoverningBodyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'admin', component: AdminPageComponent},
      {path: 'about', component: AboutComponent},
      {path: 'contact-us', component: ContactUsComponent},
      {path: 'students', component: StudentsComponent},
      {path: 'faculty/permanent', component: PermanentFacultyComponent},
      {path: 'faculty/guest', component: GuestFacultyComponent},
      {path: 'faculty/non-teaching-staff', component: NonTeachingStaffComponent},
      {path: 'students/placement', component: PlacementsComponent},
      // {path: 'vacancies', component: VacanciesComponent},
      {path: 'tenders', component: TendersComponent},
      {path: 'institute/executive-council', component: ExecutiveCouncilComponent},
      {path: 'institute/governing-body', component: GoverningBodyComponent}
    ]),
  BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
