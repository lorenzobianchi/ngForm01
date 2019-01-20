import { Component } from '@angular/core';
import { PeopleService } from '../people/people.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss']
})
export class PersonEditComponent  {

  people;
  constructor(private peopleService: PeopleService) {
    this.people = this.peopleService.getPeople();
    console.log('people ===>', this.people);
  }

  setPerson(value) {
    this.peopleService.setPersonName(value);
  }
}
