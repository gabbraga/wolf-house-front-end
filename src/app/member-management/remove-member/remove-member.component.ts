import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-remove-member',
  templateUrl: './remove-member.component.html',
  styleUrls: ['./remove-member.component.css']
})
export class RemoveMemberComponent implements OnInit {

  public removeMemberForm: FormGroup;
  public houseNames: string[];

  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.houseNames = ['Arctic', 'Grey', 'Timber'];

    this.removeMemberForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastInitial: [null, Validators.required],
      house: [null, Validators.required],
      memberType: [null, Validators.required]
    })
  }

  ngOnInit(): void {
  }

}
