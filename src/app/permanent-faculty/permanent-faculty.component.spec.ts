import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanentFacultyComponent } from './permanent-faculty.component';

describe('PermanentFacultyComponent', () => {
  let component: PermanentFacultyComponent;
  let fixture: ComponentFixture<PermanentFacultyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermanentFacultyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermanentFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
