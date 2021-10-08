// My Scripts

//Make an Array For Choices
const choices = ["Rock", "Paper", "Scissors"]
//Prompt User for Rock, Paper, or Scissors and Store Answer
const userPlay = window.prompt("Choose Rock, Paper, or Scissors: ")
alert("Your choice is " + userPlay)
//Randomize Computer Choice for Rock, Paper, or Scissors and Store Answer
const computerPlay = choices[Math.floor(Math.random() * choices.length)]
alert("The computer chose " + computerPlay)
//Compare Player vs Computer Choice for One Game
if (userPlay === computerPlay) {
  alert("Draw")
} else if (userPlay === "Rock" && computerPlay === "Paper") {
  alert("You Lose")
} else if (userPlay === "Rock" && computerPlay === "Scissors") {
  alert("You Win")
} else if (userPlay === "Paper" && computerPlay === "Rock") {
  alert("You Win")
} else if (userPlay === "Paper" && computerPlay === "Scissors") {
  alert("You Lose")
} else if (userPlay === "Scissors" && computerPlay === "Rock") {
  alert("You Lose")
} else if (userPlay === "Scissors" && computerPlay === "Paper") {
  alert("You Win")
} else {
  alert("Something went wrong...")
}

//create new function for 5 round game
//keep track of scores for rounds
//return score to player each round
//determine game winner
