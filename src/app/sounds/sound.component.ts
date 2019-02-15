import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sound',
  template: `
    <div
      class="key" data-key="dataKey"
      [class.active]="active">
      <kbd>{{ key }}</kbd>
    </div>`,
  styleUrls: ['./sounds.component.scss']
})
export class SoundComponent implements OnInit {
  @Input() dataKey;
  @Input() key;
  @Input() active;
  @Output() pressed = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  playSound() {
    console.log(`You press ${this.key} with code ${this.dataKey}`);
  }

  press(event: any) {
    this.pressed.emit(event);
    console.log('event =>', event);
  }

}
