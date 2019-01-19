import { Component } from '@angular/core';
import { map, startWith, scan, mapTo } from 'rxjs/operators';
import { Subject, merge, interval } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent {
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
    // this.clock2$ = (this.click$.pipe(
    //   map(
    //     () => new Date()
    //   )
    // ), )

    // this merge 2 observable & update clock2 every 5 secs
    // this.clock2$ = merge(
    //   ...[this.click$, interval(5000)]
    // ).pipe(map(
    //   () => new Date()));

    this.clock2$ = merge(
      ...[
        this.click$.pipe(mapTo('hour')),
        interval(1000).pipe(mapTo('second'))
      ]
    ).pipe(
      startWith(new Date()),
      scan((accumulator, currentValue: any) => {
        const date = new Date(accumulator);

        if (currentValue === 'second') {
          date.setSeconds(date.getSeconds() + 1);
        }
        if (currentValue === 'hour') {
          date.setHours(date.getHours() + 1);
        }
        return date;
      }, 0)
    );
  }


}
