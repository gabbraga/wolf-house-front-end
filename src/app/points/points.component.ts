import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent implements OnInit {
  public pointsForm: FormGroup;
  public paws$: Observable<string[]>;
  public members$: Observable<string[]>;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.paws$ = of([
      "Perseverance",
      "Honesty",
      "Cooperation",
      "Teamwork",
      "Empathy",
      "Self-Discipline",
      "Responsibility",
      "Flexibility",
      "Kindness",
      "Respect",
      "Leadership",
      "Participation"
    ]);

    this.members$ = of([
      "Amy",
      "Brock",
      "Carlos",
      "David",
      "Emily",
      "Fred"
    ]);
  }

  ngOnInit(): void {
    this.pointsForm = this.formBuilder.group({
      member: [null, Validators.required],
      house: [{value: '', disabled: true}, Validators.required],
      points: [null, Validators.required],
      paw: [null, Validators.required],
      notes: '',
      teacher: [{value:'Tiffany', disabled: true}, Validators.required]
    });

    this.pointsForm.controls.member.valueChanges.subscribe((member: string) => {
      if(member != null) {
        this.pointsForm.controls.house.setValue('Timber');
      } else {
        this.pointsForm.controls.house.setValue('');
        this.pointsForm.controls.points.setValue(null);
        this.pointsForm.controls.paw.setValue(null);
        this.pointsForm.controls.notes.setValue('');
      }
    });
  }

}
