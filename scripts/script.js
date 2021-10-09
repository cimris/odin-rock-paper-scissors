// My Scripts
//Score
let playerScore = 0
let computerScore = 0
//Prompt User for Rock, Paper, or Scissors
function userPlay() {
  return window.prompt("Choose Rock, Paper, or Scissors").toLowerCase()
}
//Randomize Computer Choice for Rock, Paper, or Scissors
function computerChoice() {
  const computerChoices = ["rock", "paper", "scissors"]
  return computerChoices[Math.floor(Math.random() * computerChoices.length)]
}
//Compare Player vs Computer Choice Function for One Game
function rpsRound() {
  const userChoice = userPlay()
  console.log(userChoice) //delete later
  alert("Your choice is " + userChoice + ".")

  const computerPlay = computerChoice()
  console.log(computerPlay) //delete later
  alert("The computer chose " + computerPlay + ".")

  if (userChoice === computerPlay) {
    return "Draw"
  } else if (userChoice === "rock" && computerPlay === "paper") {
    computerScore++
    return "You Lose"
  } else if (userChoice === "rock" && computerPlay === "scissors") {
    playerScore++
    return "You Win"
  } else if (userChoice === "paper" && computerPlay === "rock") {
    playerScore++
    return "You Win"
  } else if (userChoice === "paper" && computerPlay === "scissors") {
    computerScore++
    return "You Lose"
  } else if (userChoice === "scissors" && computerPlay === "rock") {
    computerScore++
    return "You Lose"
  } else if (userChoice === "scissors" && computerPlay === "paper") {
    playerScore++
    return "You Win"
  } else {
    return "Something went wrong..."
  }
}
//create new function for 5 round game
function game() {
  rpsRound()
  rpsRound()
  rpsRound()
  rpsRound()
  rpsRound()
}

game()
