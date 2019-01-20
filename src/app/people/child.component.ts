import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-child',
  template: `
  <h3>Child component</h3>
  <pre>{{ personService.getPeople() | json }}</pre>

  <app-person-edit></app-person-edit>
  `,
  providers: [PeopleService]
})
export class ChildComponent implements OnInit {
  constructor(public personService: PeopleService) {}

  ngOnInit() {}
}
