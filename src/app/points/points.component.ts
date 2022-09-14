import { Component, OnInit } from '@angular/core';
import {Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

interface StudentClientModel {
  name: string;
  house: string;
}

interface StudentServerResponse {
  _id: string;
  grade: number | string;
  house: string;
  teacher: string;
  name: string;
}

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent implements OnInit {
  public pointsForm: FormGroup;
  public paws$: Observable<string[]>;
  public students$: Observable<StudentClientModel[]> | null;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
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

    this.students$ = null;
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

    this.pointsForm.controls.member.valueChanges.subscribe((student: StudentClientModel) => {
      if(student) {
        this.pointsForm.controls.house.setValue(student.house);
      } else {
        this.pointsForm.controls.house.setValue('');
        this.pointsForm.controls.points.setValue(null);
        this.pointsForm.controls.paw.setValue(null);
        this.pointsForm.controls.notes.setValue('');
      }
    });

    this.students$ = this.http.get(environment.api + 'students').pipe(
      map((students: StudentServerResponse[]) => {
        return students.map((student: StudentServerResponse) => {
          return {
            house: student.house,
            name: student.name
          }
        });
      })
    );

  }

}
