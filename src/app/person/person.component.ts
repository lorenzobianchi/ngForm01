import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { PeopleService } from '../people/people.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  person;
  constructor(private logger: LoggerService, private people: PeopleService) { }

  ngOnInit() {
    this.person = this.people.getPeople();
  }

  doLog() {
    this.logger.log('message fron person component');
  }

}
