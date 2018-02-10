import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesSlideComponent } from './images-slide.component';

describe('ImagesSlideComponent', () => {
  let component: ImagesSlideComponent;
  let fixture: ComponentFixture<ImagesSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
