import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title: string = 'ngForm01'
  dropdownOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleDropdown() {
    return this.dropdownOpen = !this.dropdownOpen
  }
}
