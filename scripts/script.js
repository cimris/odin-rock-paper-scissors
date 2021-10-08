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
  return computerChoices[Math.floor(Math.random() * computerChoices.length)]
}

const computerPlay = computerChoice()
alert("The computer chose " + computerPlay)
//Compare Player vs Computer Choice Function for One Game
function rpsRound() {
  if (userChoice === computerPlay) {
    return "Draw"
  } else if (userChoice === "Rock" && computerPlay === "Paper") {
    return "You Lose"
  } else if (userChoice === "Rock" && computerPlay === "Scissors") {
    return "You Win"
  } else if (userChoice === "Paper" && computerPlay === "Rock") {
    return "You Win"
  } else if (userChoice === "Paper" && computerPlay === "Scissors") {
    return "You Lose"
  } else if (userChoice === "Scissors" && computerPlay === "Rock") {
    return "You Lose"
  } else if (userChoice === "Scissors" && computerPlay === "Paper") {
    return "You Win"
  } else {
    return "Something went wrong..."
  }
}
console.log(rpsRound())
alert(rpsRound())
//create new function for 5 round game
//keep track of scores for rounds
//return score to player each round
//determine game winner
