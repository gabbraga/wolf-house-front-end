import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent implements OnInit {

  public editMemberForm: FormGroup;
  public houseNames: string[];

  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.houseNames = ['Arctic', 'Grey', 'Timber'];

    this.editMemberForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastInitial: [null, Validators.required],
      house: [null, Validators.required],
      memberType: [null, Validators.required]
    })
  }

  ngOnInit(): void {
  }

}
