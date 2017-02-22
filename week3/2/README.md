# Week 3.2

### Lecture

### Tasks:

(Use the pager and grid from [here](https://github.com/HackBulgaria/Angular-2/tree/master/week2/1/tasks/src/app/directives). Use ContentChild and ViewChild to solve the tasks bellow)

1. Modify the grid component so it can present a custom header and footer that the user provided.
2. Modify the grid component and the pager to be able to use a custom template provided by the user and remove the default one. This will allow the user to control how the data is displayed.
3. Create search input that will filter the results showin in the grid dynamically. Use ```Observable.fromEvent(nativeElement, 'keyup').``` Don't forget to throttle the events. (Use [ElementRef](https://angular.io/docs/js/latest/api/core/index/ElementRef-class.html) to get the input element)
4. Modify the app to use redux (ngrx)
5. Use ngrx/effects to dispatch an action that will fetch the data from this [API](https://jsonplaceholder.typicode.com/), put it into the store and show it to the user.