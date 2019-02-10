import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { PeopleService } from '../people/people.service';
import { WomanService } from '../people/woman.service';

@Component({
  selector: 'app-woman',
  templateUrl: './woman.component.html',
  styleUrls: ['./woman.component.scss'],
  providers: [{provide: PeopleService, useClass: WomanService}]
})
export class WomanComponent implements OnInit {

  person;
  constructor(private logger: LoggerService, private people: PeopleService) { }

  ngOnInit() {
    this.person = this.people.getPeople();
  }

  doLog() {
    this.logger.log('message fron person component');
  }

}
