# Task --- Upgrade Word Game (This task is mainly to practice the things from the Lecture 2)

Create Component WordView that takes an Input the current word and presents it to the user.

Create Component Letter that has a property letter and a boolean property selected. This Component should be used in both WordView and LetterBank to represent the letters. 
Example:
```html
<letter>A</letter>
```
In WordView the boolean property if true should hide the current letter. In the LetterBank if selected is true then the current letter is guessed (marked).

Create Component LetterBank. Between the closing and opening tags the letter bank should have all the letter components and a title. LetterBank should also have an Input which represent the correct letters for the current word. If a letter from the bank is clicked the bank component should check to see if the selected letter is from the correct ones and if it is it should emit an event to the game component with the letter passed as data and the selected property should be set to true. 

Example: 
```html
<letter-bank [correctLetters]="...">
    <letter>A</letter>
    <letter>B</letter>
    <letter>C</letter>
    <letter>D</letter>
    <letter>E</letter>
    ...
    <div class="title">Letter bank:</div>
</letter-bank>
```
The game component should tell the WordView when a correct letter is selected so it can be set visible.
