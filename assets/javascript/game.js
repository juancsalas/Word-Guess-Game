
var soccerTeams = ["LOS ANGELES GALAXY", "DC UNITED", "TORONTO FC", "PORTLAND THORNS", "ORLANDO CITY SC", "ATLANTA UNITED", "SEATTLE SOUNDERS", "PORTLAND TIMBERS", "SPORTING KANSAS CITY", "ORLANDO PRIDE", "SEATTLE REIGN", "UTAH ROYALS", "MANCHESTER CITY", "MANCHESTER UNITED", "LIVERPOOL", "LEICESTER CITY", "CHELSEA", "BAYERN MUNICH", "BORUSSIA DORTMUND", "FC SCHALKE", "JUVENTUS", "INTER MILAN", "AC MILAN", "NAPOLI", "AS ROMA", "BARCELONA", "REAL MADRID", "ATLETICO MADRID", "VALENCIA"];

// var soccerTeams = ["LOS ANGELES GALAXY"]

var selectedTeam;
var wins = 0;
var losses = 0;
var guessesLeft = 5;
var alreadyGuessed = [];
var userGuess;
var underscoreArray = [];
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


// This function tells the computer to choose a team from the soccerTeams array at random
// .split function allows each letter of the soccerTeam to exist in its own array index
function teamSelection () {

    teamString = soccerTeams[Math.floor(Math.random() * soccerTeams.length)]
    selectedTeam = teamString.split("");
    console.log (selectedTeam)
    
    // For loop to create separate array that has underscores for every element (letter) in SelectedTeam
    for (i = 0; i < selectedTeam.length; i++) {
        underscoreArray.push("_");
        
        // If statement states that if there is a space in selectedTeams there should also be a space in underscoreArray in the same index
        // Applies only to multi-word soccer teams
        //Prevents user from trying to guess a letter when there is actually a space instead
        if (selectedTeam[i] === " "){
            underscoreArray[i] = "\xa0"
        }
    }
    console.log(underscoreArray);
    
    // Displays initial game stats
    $("#instructions").html("");
    $("#scoreText").html("Wins: " + wins + "\xa0\xa0" + "--" +"\xa0\xa0" + "Losses: " + losses);
    // var belows refers to the guessing underscores
    $("#guessStringText").html(underscoreArray.join(" "));
    $("#guessesLeftText").html("Guesses Left: " + guessesLeft);
    $("#alreadyGuessedText").html("Letters Already Guessed: " + alreadyGuessed.join(" "));
    
    // var img = document.createElement("img");
    // img.src = "assets/images/gamePlay.jpeg";
    // var src = document.getElementById("resultImage");
    // img.setAttribute("width", "300");
    // src.appendChild(img, resultImage);

}

// Starts the game upon user pressing a letter, displays stats, word placeholders, and runs function teamSelection and hangmanGame
document.onkeyup = function(event) {
    userGuess = event.key.toUpperCase();

    // Limits user to start game only when a letter is pressed and not any other key. useful to prevent command/control + r from triggering guesses
    if (alphabet.includes(userGuess) && userGuess.length === 1){
        teamSelection()
        hangmanGame()
    }
}


function hangmanGame() {

    // userGuess starts storing the letter guessed by user for the hangmanGame
    document.onkeyup = function(event) {
      userGuess = event.key.toUpperCase();
        
        // Limits user to start game only when a letter is pressed and not any other key. useful to prevent command/control + r from triggering guesses
        if (alphabet.includes(userGuess) && userGuess.length === 1){
            
            // Loop checks if letter chosen by user (userGuess) matches by checking each element in array selectedTeams
            for (let i = 0; i < selectedTeam.length; i++) {

                // If userGuess matches an element in selectedTeam array, if statement will push that letter to the it's corresponding position in underscoreArray
                if (userGuess === selectedTeam[i]) {
                    underscoreArray[i] = userGuess
                }        
            }
            
            // Checks if userGuess letter is in either statement
            //Purpose of this if statement is to prevent repeated or correct letter from being pushed into alreadyGuessed array and to reduce guessesLeft by one per letter
            if (alreadyGuessed.includes(userGuess) || underscoreArray.includes(userGuess)) {
                // Left blank since nothing is suppose to happen if this statement is true
            }
            else {
                // Checks if userGuess is in selected Team array
                if (selectedTeam.includes(userGuess)) {
                    // Left blank since nothing is suppose to happen if this statement is true
                }

                // If letter chosen is a wrong letter then it gets pushed to alreadyGuessed and guessedLeft is reduced by 1
                else {
                    alreadyGuessed.push(userGuess);
                    guessesLeft--;
                }
            }
        }    
            // Statement restarts game and resets game stats when players runs out of guesses
            if (guessesLeft === 0) {
                losses++;

                document.getElementById("gamePlay").src="";
                var img = document.createElement("img");
                img.src = "assets/images/redCard.jpg";
                var src = document.getElementById("resultImage");
                img.setAttribute("width", "375");
                src.appendChild(img, resultImage);


                // Waits for user to press one letter after running out of tries to reset game
                document.onkeyup = function(event) {
                    userGuess = event.key.toUpperCase();

                    if (alphabet.includes(userGuess) && userGuess.length === 1){
                        guessesLeft = 15;
                        alreadyGuessed = [];
                        underscoreArray = [];
                        teamSelection();
                        hangmanGame();
                        src.removeChild(img, resultImage);  
                    }
                }
            }

            // Statement restarts game and resets stats when player wins by checking that there are no more underscores left in the underscoreArray
            if (underscoreArray.includes("_")) {
                // Left blank since nothing is suppose to happen if this statement is true
            }
            else{
                wins++;
                
                document.getElementById("gamePlay").src="";
                var img = document.createElement("img");
                img.src = "assets/images/"+teamString+".png";
                var src = document.getElementById("resultImage");
                img.setAttribute("width", "200");
                src.appendChild(img, resultImage);

                


                // Waits for user to press one letter after solving to reset game
                document.onkeyup = function(event) {
                userGuess = event.key.toUpperCase();
                
                    if (alphabet.includes(userGuess) && userGuess.length === 1){
                        guessesLeft = 15;
                        alreadyGuessed = [];
                        underscoreArray = [];
                        teamSelection();
                        hangmanGame();
                        src.removeChild(img, resultImage);                    }
                }
            }
        


        // Updates the game stat text during gameplay
        $("#scoreText").html("Wins: " + wins + "\xa0\xa0" + "--" +"\xa0\xa0" + "Losses: " + losses);
         // var belows refers to the guessing underscores
        $("#guessStringText").html(underscoreArray.join(" "));
        $("#guessesLeftText").html("Guesses Left: " + guessesLeft);
        $("#alreadyGuessedText").html("Letters Already Guessed: <br/>" + alreadyGuessed.join(" "));
    }   
}