import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesRegistrationComponent } from './fees-registration.component';

describe('FeesRegistrationComponent', () => {
  let component: FeesRegistrationComponent;
  let fixture: ComponentFixture<FeesRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeesRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
