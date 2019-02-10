import { Injectable } from '@angular/core';
import { PeopleService } from './people.service';

@Injectable()
export class WomanService extends PeopleService {
    getPeople() {
      const person = super.getPeople();
      person.name = 'Vale';
      person.age = 30;
      person.gender = 'f';
      return person;
    }
}
