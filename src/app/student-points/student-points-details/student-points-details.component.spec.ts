import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPointsDetailsComponent } from './student-points-details.component';

describe('StudentPointsDetailsComponent', () => {
  let component: StudentPointsDetailsComponent;
  let fixture: ComponentFixture<StudentPointsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentPointsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPointsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
