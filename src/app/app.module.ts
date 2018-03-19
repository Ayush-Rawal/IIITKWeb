import {NgbModule} from '@ng-bootstrap/ng-bootstrap';//predefined BS components for Angular
import { TimetableComponent } from './timetable/timetable.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutBarComponent } from './about-bar/about-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
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
import { TendersComponent } from './tenders/tenders.component';
import { ExecutiveCouncilComponent } from './executive-council/executive-council.component';
import { GoverningBodyComponent } from './governing-body/governing-body.component';
import { SenateComponent } from './senate/senate.component';
import { DirectorComponent } from './director/director.component';
import { CoordinatorComponent } from './coordinator/coordinator.component';
import { IndustryPartnersComponent } from './industry-partners/industry-partners.component';
import { DepartmentsComponent } from './departments/departments.component';
import { ScholarshipsComponent } from './scholarships/scholarships.component';
import { LibraryComponent } from './library/library.component';
import { InstituteEventsComponent } from './institute-events/institute-events.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { FeesRegistrationComponent } from './fees-registration/fees-registration.component';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';
import { ImagesSlideComponent } from './images-slide/images-slide.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { VacanciesComponent } from './vacancies/vacancies.component'
import { RtiComponent } from './rti/rti.component'

@NgModule({
  declarations: [
    AppComponent,
    AboutBarComponent,
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
    TendersComponent,
    ExecutiveCouncilComponent,
    GoverningBodyComponent,
    SenateComponent,
    DirectorComponent,
    CoordinatorComponent,
    IndustryPartnersComponent,
    DepartmentsComponent,
    ScholarshipsComponent,
    TimetableComponent,
    CurriculumComponent,
    LibraryComponent,
    InstituteEventsComponent,
    AdmissionsComponent,
    FeesRegistrationComponent,
    AdminSigninComponent,
    ImagesSlideComponent,
    ErrorPageComponent,
    VacanciesComponent,
    RtiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'admin', component: AdminSigninComponent},
      {path: 'about', component: AboutComponent},
      {path: 'contact-us', component: ContactUsComponent},
      {path: 'students/current-batches', component: StudentsComponent},
      {path: 'faculty/contract', component: PermanentFacultyComponent},
      {path: 'faculty/guest', component: GuestFacultyComponent},
      {path: 'faculty/non-teaching-staff', component: NonTeachingStaffComponent},
      {path: 'students/placement', component: PlacementsComponent},
      {path: 'vacancies', component: VacanciesComponent},
      {path: 'tenders', component: TendersComponent},
      {path: 'institute/executive-council', component: ExecutiveCouncilComponent},
      {path: 'institute/governing-body', component: GoverningBodyComponent},
      {path: 'institute/senate', component: SenateComponent},
      {path: 'institute/director', component: DirectorComponent},
      {path: 'institute/coordinator', component: CoordinatorComponent},
      {path: 'institute/industry-partners', component: IndustryPartnersComponent},
      {path: 'academics/departments', component: DepartmentsComponent},
      {path: 'academics/timetable', component: TimetableComponent},
      {path: 'academics/curriculum', component: CurriculumComponent},
      {path: 'academics/scholarships', component: ScholarshipsComponent},
      {path: 'academics/library', component: LibraryComponent},
      {path: 'academics/institute-events', component: InstituteEventsComponent},
      {path: 'institute/admissions', component: AdmissionsComponent},
      {path: 'institute/fees-registration', component: FeesRegistrationComponent},
      {path: 'rti', component: RtiComponent},
      {path: '**', component: ErrorPageComponent}
    ]),
  BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
