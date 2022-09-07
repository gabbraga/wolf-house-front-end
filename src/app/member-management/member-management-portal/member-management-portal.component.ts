import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validator, Validators, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-member-management-portal',
  templateUrl: './member-management-portal.component.html',
  styleUrls: ['./member-management-portal.component.css']
})
export class MemberManagementPortalComponent implements OnInit {

  public addMemberForm: FormGroup;
  public houseNames: string[];
  public members: string[];

  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.houseNames = ['Arctic', 'Grey', 'Timber'];
    this.members = [
      "Amy",
      "Brock",
      "Carlos",
      "David",
      "Emily",
      "Fred"
    ];
    this.addMemberForm = this.formBuilder.group({
      selectedMember: [null, Validators.required]
    });

    this.addMemberForm.controls.selectedMember.valueChanges.subscribe((member: string) => {
      if(member != null) {
        this.addMemberForm.addControl('firstName', new FormControl([{value: 'test first', disabled: true}, Validators.required]));
        this.addMemberForm.addControl('lastInitial', new FormControl([{value: 'test last', disabled: true}, Validators.required]));
        this.addMemberForm.addControl('house', new FormControl([{value: 'test house', disabled: true}, Validators.required]));
        this.addMemberForm.addControl('memberType', new FormControl([{value: 'test student', disabled: true}, Validators.required]));
      }
    });

  }
  ngOnInit(): void {


  }

  public editMember() {
    this.addMemberForm.controls.firstName.enable();
    this.addMemberForm.controls.lastInitial.enable();
    this.addMemberForm.controls.house.enable();
    this.addMemberForm.controls.memberType.enable();
  }

}
