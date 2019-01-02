import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-btn-form',
  templateUrl: './select-btn-form.component.html',
  styleUrls: ['./select-btn-form.component.scss']
})
export class SelectBtnFormComponent implements OnInit {
  locations = ['Home', 'Away', 'Space', 'Mars', 'Breeks Mountains'];

  constructor() { }

  ngOnInit() {
  }

}
