import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffPointsDetailsComponent } from './staff-points-details.component';

describe('StaffPointsDetailsComponent', () => {
  let component: StaffPointsDetailsComponent;
  let fixture: ComponentFixture<StaffPointsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffPointsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffPointsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
