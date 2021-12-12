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
const roundResult = document.getElementById("round-result");
const compRockImg = document.getElementById("comp-r-img");
const compPaperImg = document.getElementById("comp-p-img");
const compScissorsImg = document.getElementById("comp-s-img");
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

  if (computerPlay === "rock") {
    compRockImg.classList.add("picked");
    setTimeout(function () {
      compRockImg.classList.remove("picked");
    }, 500);
  } else if (computerPlay === "paper") {
    compPaperImg.classList.add("picked");
    setTimeout(function () {
      compPaperImg.classList.remove("picked");
    }, 500);
  } else if (computerPlay === "scissors") {
    compScissorsImg.classList.add("picked");
    setTimeout(function () {
      compScissorsImg.classList.remove("picked");
    }, 500);
  } else {
    console.log("Something went wrong with CPU Image Size");
  }
}

//Functions for Game States
function roundDraw(userChoice, computerPlay) {
  playerTally.innerHTML = playerScore;
  computerTally.innerHTML = computerScore;
  roundResult.innerHTML = "The round is a draw.";
}
function roundWon(userChoice, computerPlay) {
  playerScore++;
  playerTally.innerHTML = playerScore;
  computerTally.innerHTML = computerScore;
  roundResult.innerHTML = "User has won the round.";
}
function roundLost(userChoice, computerPlay) {
  computerScore++;
  computerTally.innerHTML = computerScore;
  playerTally.innerHTML = playerScore;
  roundResult.innerHTML = "Computer has won the round.";
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
