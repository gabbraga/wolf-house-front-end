import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';


@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent implements OnInit {
  public filteredMembers: Observable<string[]>;
  public paws: string[];
  public members: string[];
  public selectedMember: any;
  public selectedHouseName: string;
  public pointsForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.paws = [
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
    ];
    this.members = [
      "Amy",
      "Brock",
      "Carlos",
      "David",
      "Emily",
      "Fred"
    ];
  }

  ngOnInit(): void {
    this.pointsForm = this.formBuilder.group({
      member: [null, Validators.required],
      house: ['', Validators.required],
      points: [null, Validators.required],
      paw: [null, Validators.required],
      notes: ['', Validators.required],
      teacher: ['Tiffany', Validators.required]
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
/*     this.filteredMembers = this.pointsForm.controls.memberControl.valueChanges.pipe(startWith(''),map(value => this._filter(value)));
 */  
}

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.paws.filter(option => option.toLowerCase().includes(filterValue));
  }

}
