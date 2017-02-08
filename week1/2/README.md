# Weel 1.2

## Using RxJS solve the tasks bellow (use pure functions and separate functionality):
Use this [link](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/gettingstarted/categories.md) if you need help.
---

### Part 1.
1.1.Sum up all the elements from the array bellow:
```
const numbers = [10,64,12,32];
```

1.2.Extract the odd numbers from the array bellow:
```
const numbers = [3,7,5,2,8,1];
```

1.3.From the given array extract all the names and ages to separate arrays:
```
const users = [{
  name: 'Ivan',
  age: 18
}, {
  name: 'Petar',
  age: 25
}, {
  name: 'Alex',
  age: 10
}]
```

1.4.Create a component clock that gets the current time from the browser on initialization and creates an Observable. Subscribe to the observable and set the value to a local property. Every minute this proeperty needs to be changed to represent the real time on our page.

---

### Part 2.
2.1.We have a dummy method post in our main component that looks like:
```
get(url, callback) {
  console.log(`fake get request to ${url}`);
  setTimeout(() => {
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
}
```
Using Observables wrap up this get method so we can use it like:

```this.get('url').map(...).map(...).subscribe(...)```

The flow should be like: get -> JSON.parse -> modify and use 1.4 to extract names and ages (check let operator)

2.2.We have an array of urls. Using the map operator and the modified get from the previous task, simulate getting the data from each urls.
```
const urls = ['http://domain.com', 'http://domain.bg', 'http://domain.eu']
```

---

### Part 3.
3.1.Use the modified dummy get method bellow and make sure you handle the error and present the error message to the user:

```
get(url, callback) {
  console.log(`fake get request to ${url}`);
  if(/(.*)\.(bg)/.test(url)) return callback(new Error('Cannot resolve domain .bg'));
  setTimeout(() => {
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
}
```

3.2.Make sure that all the urls from the array are fetched. If there is a failed request just set the data as ``null`` (Chain isolation). Show the results to the user like so:
```
http://domain.com
Ivan - 18
Petar - 25
Alex - 10

http://domain.eu
Ivan - 18
Petar - 25
Alex - 10
```
### Part 4.
4.1 In this task we will simulate a socket connection. We have a method ``connect`` that takes a url and creates a (fake) connection to the given url. The returned value of calling this method is an (Hot) Observable. When we subscribe to the method we should get the same stream and not open a new conncetion. Use `interval(1500)` to simulate data coming from the server.

### Part 5.
Use a ReplySubject for this task to create data caching for the socket connection from the previous task. By doing this every subscriber will receive all the data emited from the source when subscribed. Review links: [link1](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/subjects/subject.md), [link2](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/subjects/replaysubject.md).