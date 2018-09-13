# Word-Guess-Game - Juan Carlos Salas
Assignment 3

This is a soccer edition Word Guess Game. The game picks soccer teams of around the world from a large list I added. The player then must guess the team by pressing various letter. Only ten tries are allowed before the player loses. Pressing another letter will have the game select another team at random for the player to guess.


Computuer selects team from an array that has several elements (teams). That element is stored in a string, and later pushed into another array where the string is split into as many arrays as there are letter. The a third array is created that pushes as many underscores "_" as there are elements of the array where the string has been split into. The array with the underscores is what the player sees at the beginning of the game. 

To start the game, the player presses any key that will display the array with underscores (the word the player has to guess) as well as game stats, an couple of sound effects

As the player guesses a letter, it is checked against the array that has the selected team string split into, and if the letter matches any element, it will be pushed into the array with underscores in the corresponding position, allowing the player to see the where the letter goes in the word. A wrong guess will be pushed into an array that holds and displays incorrect letters. Already chosen letters won't have any effect on the game.

Every time the player chooses a letter, the program will also check if there are any underscores left in the array. If there aren't any left, it means the player has chosen all the correct letters, therefore the player wins. The image of the logo corresponding the the gussed team will display and the audio will change to a cheer and chant.

The program will also check for the number of guesses remaining, which will onyl be reduced for any incorrect guess. If that number equals to zero, it signifies the player looses the round. The program will change image and the audio will also change to a whistle and crowd booing.

After a player either wins or loses, pressing any letter key will automatically reset the game with a new word, and all game stats will reset to its original form except for "wins" and loses".
