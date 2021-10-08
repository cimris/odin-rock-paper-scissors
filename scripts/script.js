// My Scripts
//Score
let playerScore = 0
let computerScore = 0
//Prompt User for Rock, Paper, or Scissors
function userPlay() {
  return window.prompt("Choose Rock, Paper, or Scissors").toLowerCase()
}

const userChoice = userPlay()
console.log(userChoice) //delete later
alert("Your choice is " + userChoice + ".")
//Randomize Computer Choice for Rock, Paper, or Scissors
function computerChoice() {
  const computerChoices = ["rock", "paper", "scissors"]
  return computerChoices[Math.floor(Math.random() * computerChoices.length)]
}

const computerPlay = computerChoice()
console.log(computerPlay) //delete later
alert("The computer chose " + computerPlay + ".")
//Compare Player vs Computer Choice Function for One Game
function rpsRound() {
  if (userChoice === computerPlay) {
    return "Draw"
  } else if (userChoice === "rock" && computerPlay === "paper") {
    return "You Lose"
  } else if (userChoice === "rock" && computerPlay === "scissors") {
    return "You Win"
  } else if (userChoice === "paper" && computerPlay === "rock") {
    return "You Win"
  } else if (userChoice === "paper" && computerPlay === "scissors") {
    return "You Lose"
  } else if (userChoice === "scissors" && computerPlay === "rock") {
    return "You Lose"
  } else if (userChoice === "scissors" && computerPlay === "paper") {
    return "You Win"
  } else {
    return "Something went wrong..."
  }
}
console.log(rpsRound()) //delete later
alert(rpsRound())
//create new function for 5 round game
//keep track of scores for rounds
//return score to player each round
//determine game winner
