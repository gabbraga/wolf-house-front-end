import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffPointsListComponent } from './staff-points-list.component';

describe('StaffPointsListComponent', () => {
  let component: StaffPointsListComponent;
  let fixture: ComponentFixture<StaffPointsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffPointsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffPointsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
