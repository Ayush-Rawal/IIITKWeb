import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickContactUsComponent } from './quick-contact-us.component';

describe('QuickContactUsComponent', () => {
  let component: QuickContactUsComponent;
  let fixture: ComponentFixture<QuickContactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickContactUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
