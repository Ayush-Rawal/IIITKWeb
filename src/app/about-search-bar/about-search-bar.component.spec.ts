import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSearchBarComponent } from './about-search-bar.component';

describe('AboutSearchBarComponent', () => {
  let component: AboutSearchBarComponent;
  let fixture: ComponentFixture<AboutSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
