import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributionHistoryComponent } from './contribution-history.component';

describe('ContributionHistoryComponent', () => {
  let component: ContributionHistoryComponent;
  let fixture: ComponentFixture<ContributionHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributionHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
