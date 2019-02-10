import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  data;
  constructor(private users: ApiService) { }

  ngOnInit() {
    this.getUsers();
    localStorage.setItem('userName', 'Lore');
    localStorage.favouriteColor = 'blue';
  }

  getUsers() {
    this.users.getUsers().subscribe(res => {
      this.data = res;
      console.log('users =>', this.data);
    });
  }

  alertUserFromLocalStorage() {
    alert(`User stored in localstorage is ${localStorage.userName}`);
  }
}
