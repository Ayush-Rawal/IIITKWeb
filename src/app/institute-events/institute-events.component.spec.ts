import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteEventsComponent } from './institute-events.component';

describe('InstituteEventsComponent', () => {
  let component: InstituteEventsComponent;
  let fixture: ComponentFixture<InstituteEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
