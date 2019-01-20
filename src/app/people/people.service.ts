import { Injectable } from '@angular/core';

@Injectable()
export class PeopleService {
  name = 'Lore';
  constructor() { }

  getPeople() {
    return {
      name: this.name,
      age: 37
    };
  }

  setPersonName(value) {
    this.name = value;
  }
}
