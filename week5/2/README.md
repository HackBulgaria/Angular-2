# Week 5.2 

### Lecture

### Tasks

1. Create a pipe called time that gets applied to a string that represents time (e.g. 16:45) and takes an optional number argument - format ( 12, 24 ). Depending on the format the pipe will convert the time (e.g. 16:45 | time: 12 -> 4:45 pm) and make this as a setting for our todo application.
2. Create a CanDeactivate guard that checks if there is any data written on the add todo form when the user is trying to navigate elsewhere. If there is show a confirmation popup. If the user clicks 'yes' proceed with the CanDeactivate procedure if 'no' do nothing. Use a named outlet to show the popup.