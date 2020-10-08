import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent implements OnInit {
  memberControl = new FormControl('');
  houseControl = new FormControl('');
  filteredMembers: Observable<string[]>;
  paws: string[];
  members: string[];
  selectedMember: any;

  constructor() {
    this.houseControl.disable();
    this.paws = [
      "Reason1",
      "Reason2",
      "Reason3",
      "Reason4",
      "Reason5",
      "Reason6"
    ];
    this.members = [
      "student1",
      "student2",
      "student3",
      "student4",
      "student5",
      "student6"
    ];
  }

  ngOnInit(): void {
    this.filteredMembers = this.memberControl.valueChanges.pipe(startWith(''),map(value => this._filter(value)));
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.paws.filter(option => option.toLowerCase().includes(filterValue));
  }

}
