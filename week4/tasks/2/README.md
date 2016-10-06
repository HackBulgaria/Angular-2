#Task 1
Start a new project or refactor the old one. Reuse all the Components and Service that we have created but before that create a router structure and seperate the files in different modules. Restrict the access where needed. Only registered users can enter words and view all the words in the data store. To maintain the state if a user is logged use localStorage.

#Task 2
Create highlight pipe that will be used with the filter input (Task2) that we created the previous time. The pipe should accept two arguments - the current input value and the class that we want to apply. 
Because we are going to be generating new html we need to use the pipe this way:

```
<div [innerHTML]="'hello' | highlight:'llo':'red'"></div>
```