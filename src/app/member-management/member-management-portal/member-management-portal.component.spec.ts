import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberManagementPortalComponent } from './member-management-portal.component';

describe('MemberManagementPortalComponent', () => {
  let component: MemberManagementPortalComponent;
  let fixture: ComponentFixture<MemberManagementPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberManagementPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberManagementPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
