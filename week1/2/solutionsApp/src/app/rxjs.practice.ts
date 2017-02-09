import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/zip';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/bufferCount';

const users = [{
  name: 'Ivan',
  age: 18
}, {
  name: 'Petar',
  age: 25
}, {
  name: 'Alex',
  age: 10
}];
// 1.1
Observable.from([10, 64, 12, 32]).reduce((acc, curr) => acc + curr, 0).subscribe(console.log);
// 1.2
Observable.from([3, 7, 5, 2, 8, 1]).filter(x => x % 2 !== 0).subscribe(console.log);
// 1.3
export const extract = (arr: any[]) => {
  const source$ = Observable.from(arr);
  const names$ = source$.map(u => u.name).bufferCount(arr.length);
  const ages$ = source$.map(u => u.ages).bufferCount(arr.length);
  return Observable.zip(names$, ages$, (names, ages) => ({names, ages}));
};

extract(users).subscribe(console.log);
