import { Component } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
})
export class PeopleComponent {
    childVisible = true;
    constructor() {
    }
}
