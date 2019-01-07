import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { interval } from 'rxjs';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  click$ = new Subject();
  title = 'ngForm01';
  clock = interval(1000).pipe(
    map(() => {
      return new Date();
    })
  );
  clock2$;

  constructor() {
    this.clock.subscribe(console.log.bind(console));
    this.clock2$ = this.click$.pipe(
      map(
        () => new Date()
      )
    );
  }
  
}
