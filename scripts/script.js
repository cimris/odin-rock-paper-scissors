// My Scripts
//Score
const playerScore = 0;
const computerScore = 0;
//User Input Click for Rock, Paper, or Scissors
//What I think I have to do
//make area to be selected and make the variable equal selection
//on click of a selection make the userChoice variable equal the choice
let userChoice = document.querySelector(".player-area");

document.getElementById("player-r").addEventListener("click", function (e) {
  const userChoice = "rock";
  console.log(userChoice);
});

document.getElementById("player-p").addEventListener("click", function (e) {
  const userChoice = "paper";
  console.log(userChoice);
});

document.getElementById("player-s").addEventListener("click", function (e) {
  const userChoice = "scissors";
  console.log(userChoice);
});
//Randomize Computer Choice for Rock, Paper, or Scissors
function computerChoice() {
  const computerChoices = ["rock", "paper", "scissors"];
  return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}
//Compare Player vs Computer Choice Function for One Game
function rpsRound() {
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
