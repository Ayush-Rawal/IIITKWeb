import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatedDisplayComponent } from './paginated-display.component';

describe('PaginatedDisplayComponent', () => {
  let component: PaginatedDisplayComponent;
  let fixture: ComponentFixture<PaginatedDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginatedDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatedDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
