# Task 1 --- Word Game

Create class DataSource containing an array with different words and another containing all the letters in the alphabet

Create a component WordGame and import the DataSource. When the component is constructed a random word from the DataSource should be picked.
Another random number N, should be chosen that will represent the number of hidden letters from that word.
Present the word to the user with the hidden N random letters represented as `_`

```
Example (N = 3):

Word: abstract
Display: `a__t_act`
Word Bank: z, a, t, b, q, s, y, r 
```

The user has to pick from 8 letters (the hidden ones and (8 - N) randomly picked from the alphabet) and try to guess the word.
When a correct letter is selected it should be marked in a proper way. If all letters are correctly chosen a button should appear so the user can continue with the next word.