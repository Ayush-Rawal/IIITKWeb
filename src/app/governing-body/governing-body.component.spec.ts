import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoverningBodyComponent } from './governing-body.component';

describe('GoverningBodyComponent', () => {
  let component: GoverningBodyComponent;
  let fixture: ComponentFixture<GoverningBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoverningBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoverningBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
