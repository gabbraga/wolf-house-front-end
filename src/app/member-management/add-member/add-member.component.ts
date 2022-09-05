import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  public addMemberForm: FormGroup;
  public houseNames: string[];

  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.houseNames = ['Arctic', 'Grey', 'Timber'];

    this.addMemberForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastInitial: [null, Validators.required],
      house: [null, Validators.required],
      memberType: [null, Validators.required]
    })
  }

  ngOnInit(): void {
  }

}
