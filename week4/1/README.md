# Week 4.1

### Lecture
[click here](https://speakerdeck.com/iliaidakiev/7-forms-and-simple-validations)

### Tasks

* Try using ngrx/store to export all your state and ngrx/effects for the (fake) server calls.
* Use [ng-bootstrap](https://ng-bootstrap.github.io/#/home) to create the dialogs.
* Create a [core module](https://angular.io/docs/ts/latest/guide/style-guide.html#!#04-11) that will contain all the single use components.
* Consider using [combineReducer](https://github.com/ngrx/ngrx.github.io/blob/master/store/api/combine_reducers.md) to separate the different stores (auth store that will contain the loggedUser and todo store).

1. Create a reactive signup form for our todoApp from last time. We are going to need the first name, last name, email, password and a confirmation password field, address, city, post code (create a form group for address, city, post code). If the form is submitted and there are any errors in the form display an error message.

2. Create a fake auth service that will receive the input data from the form and simulate an ajax call (use the [localStorage](https://developer.mozilla.org/en/docs/Web/API/Window/localStorage) to save the registered users). After a few seconds return a response with { success: true } if the user is registered successfuly and { success: false } otherwise (if the email is already registered). 

3. Create a login popup using the template driven approach. If the form is invalid and submitted show an error message.

4. Create an async login method on the auth service and check if the user exists and if so check if the passwords are matching. Return a proper response message and if the user is logged in successfully show the todoApp.

