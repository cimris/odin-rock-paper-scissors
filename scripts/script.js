// My Scripts

//Make an Array For Choices
const choices = ["Rock", "Paper", "Scissors"]
//Prompt User for Rock, Paper, or Scissors and Store Answer
let userPlay = window.prompt("Choose Rock, Paper, or Scissors: ")
alert("Your choice is " + userPlay)
//Randomize Computer Choice for Rock, Paper, or Scissors and Store Answer
let computerPlay = choices[Math.floor(Math.random() * choices.length)]
//Compare Player vs Computer Choice
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

//keep track of winner and loser points??
//return result to Player

//repeat for 5 rounds and report score??
