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
  console.log(userChoice); //delete later
  alert("Your choice is " + userChoice + ".");

  const computerPlay = computerChoice();
  console.log(computerPlay); //delete later
  alert("The computer chose " + computerPlay + ".");

  if (userChoice === computerPlay) {
    alert("Round Draw");
  } else if (userChoice === "rock" && computerPlay === "paper") {
    computerScore++;
    alert("Round Lost");
  } else if (userChoice === "rock" && computerPlay === "scissors") {
    playerScore++;
    alert("Round Won");
  } else if (userChoice === "paper" && computerPlay === "rock") {
    playerScore++;
    alert("Round Won");
  } else if (userChoice === "paper" && computerPlay === "scissors") {
    computerScore++;
    alert("Round Lost");
  } else if (userChoice === "scissors" && computerPlay === "rock") {
    computerScore++;
    alert("Round Lost");
  } else if (userChoice === "scissors" && computerPlay === "paper") {
    playerScore++;
    alert("Round Won");
  } else {
    alert("Something went wrong this round...");
  }
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
