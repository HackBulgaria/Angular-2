import { Component } from '@angular/core';
import './rxjs.practice';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observer } from 'rxjs/Observer';
import { extract } from './rxjs.practice';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/bufferCount';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/publish';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <clock></clock>
  `,
})
export class AppComponent {
  title = 'RxJS is cool';
  socketConnections: { [key: string]: Observable<any> } = {};
  cachedSockets: { [key: string]: Observable<any> } = {};
  constructor() {
    // Tasl 2.1
    this.get$('http://someurl.com')
      .map(data => JSON.parse(data))
      .mergeMap(data => extract(data))
      .subscribe(console.log, console.error);

    // Task 2.2
    const urls = ['http://domain.com', 'http://domain.bg', 'http://domain.eu'];
    Observable.from(urls).mergeMap(url => this.get$(url)).map(data => JSON.parse(data)).subscribe(console.log);

    // Task 3.1
    Observable.from(urls).mergeMap(url => this.errorGet$(url)).map(data => JSON.parse(data)).subscribe(console.log, console.error);

    // Task 3.2
    Observable.from(urls)
      .mergeMap((url) => {
        return Observable.of(url)
          .mergeMap(url => this.errorGet$(url))
          .map(res => JSON.parse(res))
          .catch(err => {
            console.error(err);
            return Observable.of(null);
          })
          .map(responseData => ({ responseData, url }));
      })
      .bufferCount(urls.length)
      .subscribe(res => console.log('4.1 ', res));

    // Task 4.1
    const socket_url = 'Some URL';
    this.connect(socket_url).subscribe(data => console.log(`socket connecting 1: ${data}`));
    setTimeout(() => this.connect(socket_url).subscribe(data => console.log(`socket connection 2: ${data}`)), 4000);

    // Task 5.1
    const cache_socket_url = 'Cache Some URL';
    setTimeout(() => {
      console.log('Cache');
      setTimeout(() => this.socketCache(cache_socket_url).subscribe(data => console.log(`cached socket connection 1 ${data}`)), 2000);
      setTimeout(() => this.socketCache(cache_socket_url).subscribe(data => console.log(`cached socket connection 2: ${data}`)), 6000);
      setTimeout(() => this.socketCache(cache_socket_url).subscribe(data => console.log(`cached socket connection 3: ${data}`)), 12000);
    }, 10000);
  }

  get$(url: string): Observable<any> {
    return new Observable((observer: Observer<any>) => {
      const request = this.get(url, (err: any, data: any) => {
        if (err) return observer.error(err);
        observer.next(data);
        observer.complete();
      });

      return () => {
        request.cancel();
      };
    });
  }

  get(url: string, callback: any) {
    console.log(`fake get request to ${url}`);
    const id = setTimeout(() => {
      console.log(`get request JSON response`)
      callback(null, `[{
        "name": "Ivan",
        "age": 18
      }, {
        "name": "Petar",
        "age": 25
      }, {
        "name": "Alex",
        "age": 10
      }]`);
    }, 2000);
    return {
      cancel: () => clearInterval(id)
    };
  }

  errorGet(url: string, callback: any) {
    console.log(`fake get request to ${url}`);
    if (/(.*)\.(bg)/.test(url)) callback(new Error('Cannot resolve domain .bg'));
    const id = setTimeout(() => {
      console.log(`get request JSON response`)
      callback(null, `[{
        "name": "Ivan",
        "age": 18
      }, {
        "name": "Petar",
        "age": 25
      }, {
        "name": "Alex",
        "age": 10
      }]`)
    }, 2000);
    return {
      cancel: () => clearInterval(id)
    };
  }

  errorGet$(url: string): Observable<any> {
    return new Observable((observer: Observer<any>) => {
      const request = this.errorGet(url, (err: any, data: any) => {
        if (err) return observer.error(err);
        observer.next(data);
        observer.complete();
      });

      return () => {
        request.cancel();
      };
    });
  }

  connect(url: string) {
    console.log(`socket connecting to url: ${url}`);
    let socket;
    if (socket = this.socketConnections[url]) { return socket; }
    return this.socketConnections[url] = Observable.interval(1000)
      .startWith(-1)
      .delay(1000)
      .take(5)
      .map(i => i === -1 ? 'socket connected' : `socket message ${i}`)
      .publish()
      .refCount();
  }

  socketCache(url: string) {
    let socket;
    if (socket = this.cachedSockets[url]) { return socket; }
    const subject = new ReplaySubject();
    this.connect(url).subscribe(subject);
    return this.cachedSockets[url] = subject;
  }
}
