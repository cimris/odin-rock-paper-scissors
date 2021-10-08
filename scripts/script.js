// My Scripts
//Prompt User for Rock, Paper, or Scissors
function userPlay() {
  return window.prompt("Choose Rock, Paper, or Scissors")
}

const userChoice = userPlay()
alert("Your choice is " + userChoice)
//Randomize Computer Choice for Rock, Paper, or Scissors
function computerChoice() {
  const computerChoices = ["Rock", "Paper", "Scissors"]
  const computerPick =
    computerChoices[Math.floor(Math.random() * computerChoices.length)]
  return computerPick
}

const computerPlay = computerChoice()
alert("The computer chose " + computerPlay)
//Compare Player vs Computer Choice Function for One Game
function rpsRound() {
  if (userChoice === computerPlay) {
    alert("Draw")
  } else if (userChoice === "Rock" && computerPlay === "Paper") {
    alert("You Lose")
  } else if (userChoice === "Rock" && computerPlay === "Scissors") {
    alert("You Win")
  } else if (userChoice === "Paper" && computerPlay === "Rock") {
    alert("You Win")
  } else if (userChoice === "Paper" && computerPlay === "Scissors") {
    alert("You Lose")
  } else if (userChoice === "Scissors" && computerPlay === "Rock") {
    alert("You Lose")
  } else if (userChoice === "Scissors" && computerPlay === "Paper") {
    alert("You Win")
  } else {
    alert("Something went wrong...")
  }
}

rpsRound()
//create new function for 5 round game
//keep track of scores for rounds
//return score to player each round
//determine game winner
