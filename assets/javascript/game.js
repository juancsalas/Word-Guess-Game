
var soccerTeams = ["LOS ANGELES GALAXY", "DC UNITED", "TORONTO FC", "PORTLAND THORNS", "ORLANDO CITY SC", "ATLANTA UNITED", "SEATTLE SOUNDERS", "PORTLAND TIMBERS", "SPORTING KANSAS CITY", "ORLANDO PRIDE", "SEATTLE REIGN", "UTAH ROYALS", "MANCHESTER CITY", "MANCHESTER UNITED", "LIVERPOOL", "LEICESTER CITY", "CHELSEA", "BAYERN MUNICH", "BORUSSIA DORTMUND", "FC SCHALKE", "JUVENTUS", "INTER MILAN", "AC MILAN", "NAPOLI", "AS ROMA", "BARCELONA", "REAL MADRID", "ATLETICO MADRID", "VALENCIA"];

var selectedTeam;
var wins = 0;
var guessesLeft = 15;
var alreadyGuessed = [];
var userGuess;
var underscoreArray = [];

// This function tells the computer to choose a team from the soccerTeams array at random
// .split function allows each letter of the soccerTeam to exist in its own array index
function teamSelection () {
    selectedTeam = soccerTeams[Math.floor(Math.random() * soccerTeams.length)].split("");
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
    console.log(underscoreArray)
}

teamSelection()

document.onkeyup = function(event) {
    
    userGuess = event.key.toUpperCase();

    if (userGuess.length === 1){
        for (let i = 0; i < selectedTeam.length; i++) {
            if (userGuess === selectedTeam[i]) {
                underscoreArray[i] = userGuess
            }
            else{
                alreadyGuessed.push(userGuess).active;
            }   
        }
        guessesLeft--; 
        console.log(underscoreArray)
    }


    if (underscoreArray === selectedTeam) {
        wins++;
    }


    var winsText = document.getElementById("winsText")
    var guessStringText = document.getElementById("guessStringText");
    var guessesLeftText = document.getElementById("guessesLeftText");


    winsText.textContent = "Wins: " + wins;
    // .join eliminates the commas when textContent displays elements in underscoreArray
    guessStringText.textContent = underscoreArray.join(" ");
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;

}