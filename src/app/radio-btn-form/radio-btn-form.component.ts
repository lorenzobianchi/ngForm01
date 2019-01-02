import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-btn-form',
  templateUrl: './radio-btn-form.component.html',
  styleUrls: ['./radio-btn-form.component.scss']
})
export class RadioBtnFormComponent implements OnInit {
  locations = ['Home', 'Away', 'Space', 'Mars', 'Breeks Mountains'];

  constructor() { }

  ngOnInit() {
  }

}
