import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';

const getTime = () => {
  const d = new Date();
  return {
    hours: d.getHours(),
    minutes: d.getMinutes(),
    seconds: d.getSeconds()
  };
};

@Component({
  selector: 'clock',
  template: `
  <h1><span *ngIf="clock.hours < 10">0</span>{{clock.hours}}:<span *ngIf="clock.minutes < 10">0</span>{{clock.minutes}}</h1>
  `,
})
export class ClockComponent  {
  clock: { hours: number, minutes: number, seconds: number } = null;
  constructor() {
    /*
    Task 1.4
    This solution is more complicated because I want to have the exact time but the main idea was to have something like:
    Observable.interval(6000).startWith(<any>0).map(getTime()).subscribe(...)
    */
    Observable.interval(60000) // every 60 seconds we want our stream to emit a value
      .startWith(<any>0) // when the delay is over the interval will be turend on so we will miss one value so we just poroduce one here
      .delay((60 - getTime().seconds) * 1000) // we want our stream to produce values on the exact minute so seconds need to be 0
      .startWith(<any>0) // produce an extra init value so we can get the clock initialized
      .map(() => getTime()) // we dont care about the value just get the time
      .map(val => { console.log(val); return val; }) // just loging
      .subscribe(val => this.clock = val); // set the value
  }
}
