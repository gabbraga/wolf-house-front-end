import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentContributionListComponent } from './student-contribution-list.component';

describe('StudentContributionListComponent', () => {
  let component: StudentContributionListComponent;
  let fixture: ComponentFixture<StudentContributionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentContributionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentContributionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
