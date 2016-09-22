# Task 1 - Extending our application

In our game application create components that will handle CRUD operations on words and users. Create different states for the app and using `*ngIf` present the correct views to the user. The user will navigate between the views by clicking buttons that will change those states (Later on this will be refactored to work with the Router). 

1. Create registration form for user (Fields: email, password, confirm password). Check if email is valid using regex. Password should be > 8 chars and its should match with confirm password input. If some fields arent valid present errors to user. Check if email is not already entered. Disable the Register button if data is not valid.
2. Create view that shows all registered users. From there we can go and edit users (emails will not be able to be modified) and delete them.
3. Create a form for entering words into out datastore. When adding a new word first we should check if its longer than 4 chars and afer if its not already present in datastore. If it already exists present the user with error. Associate each word with the user entering the word.
4. Create a view that shows all words in datastore and allows us to remove them. (Show which user added the word)
5. Using ngModel create filter for the users table that will allow us to search for a user by entering their email