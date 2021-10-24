// My Scripts
//Score
let playerScore = 0;
let computerScore = 0;
//ElementSelectors
const playerRock = document.getElementById("player-r");
const playerPaper = document.getElementById("player-p");
const playerScissors = document.getElementById("player-s");
//User Input Click for Rock, Paper, or Scissors
function playerStart() {
  playerRock.addEventListener("click", function () {
    rpsRound("rock");
  });

  playerPaper.addEventListener("click", function () {
    rpsRound("paper");
  });

  playerScissors.addEventListener("click", function () {
    rpsRound("scissors");
  });
}
//Randomize Computer Choice for Rock, Paper, or Scissors
function computerChoice() {
  const computerChoices = ["rock", "paper", "scissors"];
  return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}
//Compare Player vs Computer Choice Function for One Game
function rpsRound(userChoice) {
  console.log("Your choice is " + userChoice + "."); //delete later

  const computerPlay = computerChoice();
  console.log("The computer chose " + computerPlay + "."); //delete later

  if (userChoice === computerPlay) {
    roundDraw();
  } else if (userChoice === "rock" && computerPlay === "paper") {
    roundLost();
  } else if (userChoice === "rock" && computerPlay === "scissors") {
    roundWon();
  } else if (userChoice === "paper" && computerPlay === "rock") {
    roundWon();
  } else if (userChoice === "paper" && computerPlay === "scissors") {
    roundLost();
  } else if (userChoice === "scissors" && computerPlay === "rock") {
    roundLost();
  } else if (userChoice === "scissors" && computerPlay === "paper") {
    roundWon();
  } else {
    console.log("Something went wrong this round...");
  }
}

//Functions for Game States
function roundDraw() {
  console.log("Round Draw"); //delete later
  console.log(playerScore); //delete later
  console.log(computerScore); //delete later
}
function roundWon() {
  console.log("Round Won"); //delete later
  playerScore++;
  console.log(playerScore); //delete later
  console.log(computerScore); //delete later
}
function roundLost() {
  console.log("Round Lost"); //delete later
  computerScore++;
  console.log(playerScore); //delete later
  console.log(computerScore); //delete later
}
//Game Start?
playerStart();
//create new function for 5 round game
//function game() {
//  for (let i = 0; i < 5; i++) {
//    rpsRound();
//  }

//  if (playerScore === computerScore) {
//    alert("Game Draw");
//  } else if (playerScore > computerScore) {
//    alert("Game Won");
//  } else if (computerScore > playerScore) {
//    alert("Game Lost");
//  } else {
//    alert("Something went wrong this game...");
//  }
//}

//game();
