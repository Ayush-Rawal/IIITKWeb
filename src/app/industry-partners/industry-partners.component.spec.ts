import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryPartnersComponent } from './industry-partners.component';

describe('IndustryPartnersComponent', () => {
  let component: IndustryPartnersComponent;
  let fixture: ComponentFixture<IndustryPartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustryPartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
