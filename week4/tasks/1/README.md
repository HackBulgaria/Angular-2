#Task 1
Export all the words into a json file and modify the Word Service to use Angular http service. Fetch the words from the server and parse them into JS array that the app will use.

#Task 2
Create dynamic filter input using observables. When the user types a letter in the input, filter out all the words containing the input text (use regular expressions)

#Task 3
Create a clock Component using observables

#Task 4 (Optional)
Create async validation for the email when a user is registering (check if its already registered)

#Task 5 (Optional)
Create option for registering using github. Using github api (https://api.github.com/search/users?q=) create a input where the new users can enter their github nickname and show all results. When user clicks on their account get their info from (https://api.github.com/users/:username) and check if email is provided in the json. If its not null use it for registration if not alert user that they need to enter their email.
