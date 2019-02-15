import { Component, OnInit, HostListener } from '@angular/core';
import { findIndex } from 'lodash/findIndex';

export enum KEY_CODES {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}

@Component({
  selector: 'app-sounds',
  templateUrl: './sounds.component.html',
  styleUrls: ['./sounds.component.scss']
})
export class SoundsComponent implements OnInit {
  active;
  sounds = [
    {
      dataKey: 90,
      key: 'z',
      sound: 'assets/sounds/chafing.ogg'
    },
    {
      dataKey: 88,
      key: 'x',
      sound: 'assets/sounds/credulous.ogg'
    },
    {
      dataKey: 67,
      key: 'c',
      sound: 'assets/sounds/decay.ogg'
    },
    {
      dataKey: 86,
      key: 'v',
      sound: 'assets/sounds/get-outta-here.ogg'
    },
    {
      dataKey: 66,
      key: 'b',
      sound: 'assets/sounds/horse.ogg'
    },
    {
      dataKey: 78,
      key: 'n',
      sound: 'assets/sounds/inquisitiveness.ogg'
    },
    {
      dataKey: 77,
      key: 'm',
      sound: 'assets/sounds/just-like-magic.ogg'
    },
    {
      dataKey: 76,
      key: 'l',
      sound: 'assets/sounds/system-fault.ogg'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log('active K ==> ', event.key);
    console.log('evnt =>', event);
    this.active = event.key;
    const all = this.sounds.map(s => s.dataKey);
    const currentSound = all.indexOf(this.active);
    const audio = new Audio(this.sounds[currentSound].sound);
    audio.play();
  }

  playSound() {
    console.log(`You press ${this.active}!`);
  }


}
