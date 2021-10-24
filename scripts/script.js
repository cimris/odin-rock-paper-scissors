// My Scripts
//Score
let playerScore = 0;
let computerScore = 0;
//ElementSelectors
const playerRock = document.getElementById("player-r");
const playerPaper = document.getElementById("player-p");
const playerScissors = document.getElementById("player-s");
const playerTally = document.getElementById("player-tally");
const computerTally = document.getElementById("computer-tally");
const compRockImg = document.getElementById("comp-r-img");
const compPaperImg = document.getElementById("comp-p-img");
const compScissorsImg = document.getElementById("comp-s-img");
//Functions for Comp Image Enlargement
function compRockBig() {
  compRockImg.style.transform = "scale(1.1)";
}

function compPaperBig() {
  compPaperImg.style.transform = "scale(1.1)";
}

function compScissorsBig() {
  compScissorsImg.style.transform = "scale(1.1)";
}
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
  const computerPlay = computerChoice();

  if (userChoice === computerPlay) {
    roundDraw(userChoice, computerPlay);
  } else if (userChoice === "rock" && computerPlay === "paper") {
    roundLost(userChoice, computerPlay);
  } else if (userChoice === "rock" && computerPlay === "scissors") {
    roundWon(userChoice, computerPlay);
  } else if (userChoice === "paper" && computerPlay === "rock") {
    roundWon(userChoice, computerPlay);
  } else if (userChoice === "paper" && computerPlay === "scissors") {
    roundLost(userChoice, computerPlay);
  } else if (userChoice === "scissors" && computerPlay === "rock") {
    roundLost(userChoice, computerPlay);
  } else if (userChoice === "scissors" && computerPlay === "paper") {
    roundWon(userChoice, computerPlay);
  } else {
    console.log("Something went wrong this round...");
  }
}

//Functions for Game States
function roundDraw(userChoice, computerPlay) {
  console.log(userChoice); //delete later
  console.log(computerPlay); //delete later
  console.log("Round Draw"); //delete later
  playerTally.innerHTML = playerScore;
  computerTally.innerHTML = computerScore;
  console.log(playerScore); //delete later
  console.log(computerScore); //delete later
}
function roundWon(userChoice, computerPlay) {
  console.log(userChoice); //delete later
  console.log(computerPlay); //delete later
  console.log("Round Won"); //delete later
  playerScore++;
  playerTally.innerHTML = playerScore;
  computerTally.innerHTML = computerScore;
  console.log(playerScore); //delete later
  console.log(computerScore); //delete later
}
function roundLost(userChoice, computerPlay) {
  console.log(userChoice); //delete later
  console.log(computerPlay); //delete later
  console.log("Round Lost"); //delete later
  computerScore++;
  computerTally.innerHTML = computerScore;
  playerTally.innerHTML = playerScore;
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
