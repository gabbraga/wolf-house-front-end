import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPointsListComponent } from './student-points-list.component';

describe('StudentPointsListComponent', () => {
  let component: StudentPointsListComponent;
  let fixture: ComponentFixture<StudentPointsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentPointsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPointsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
