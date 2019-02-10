import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleService } from './people.service';
import { PeopleComponent } from './people.component';
import { PersonEditComponent } from '../person-edit/person-edit.component';
import { ChildComponent } from './child.component';
import { PersonComponent } from '../person/person.component';
import { WomanComponent } from '../woman/woman.component';

@NgModule({
  declarations: [
    PeopleComponent,
    PersonEditComponent,
    ChildComponent,
    PersonComponent,
    WomanComponent
  ],
  providers: [PeopleService],
  imports: [
    CommonModule
  ]
})
export class PeopleModule { }
