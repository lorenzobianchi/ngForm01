import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title: string = 'ngForm01'
  dropdownOpen: boolean = false;
  navs = [
    {url: 'posts/1', content: 'post 1'},
    {url: 'posts/2', content: 'post 2'},
    {url: 'posts/3', content: 'post 3'}
  ]

  constructor() { }

  ngOnInit() {
  }

  toggleDropdown() {
    return this.dropdownOpen = !this.dropdownOpen
  }
}
