import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestFacultyComponent } from './guest-faculty.component';

describe('GuestFacultyComponent', () => {
  let component: GuestFacultyComponent;
  let fixture: ComponentFixture<GuestFacultyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestFacultyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
