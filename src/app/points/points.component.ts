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
  public loggedInTeacher: string;

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
    this.loggedInTeacher = 'Tiffany';
  }

  ngOnInit(): void {
    this.pointsForm = this.formBuilder.group({
      member: [null, Validators.required],
      house: ['Arctic', Validators.required],
      points: [5, Validators.required],
      paw: ['Honesty', Validators.required],
      notes: [null, Validators.required]
    });
/*     this.filteredMembers = this.pointsForm.controls.memberControl.valueChanges.pipe(startWith(''),map(value => this._filter(value)));
 */  
}

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.paws.filter(option => option.toLowerCase().includes(filterValue));
  }

}
