function getComputerChoice() {
  // Cap the computer choice between 1 and 3 inclusive
  let min = 1;
  let max = 4;
  const randomChoice = Math.floor(Math.random() * (max - min) + min);
  switch (randomChoice) {
    case 1:
      computerSelection = "rock";
      break;
    case 2:
      computerSelection = "paper";
      break;
    case 3:
      computerSelection = "scissors";
      break;
  }

  return computerSelection;
}

function getPlayerChoice() {
  const validOptions = ["rock", "paper", "scissors"];
  let playerSelection;
  // Loop through the prompt until player picks one of the three valid options
  do {
    let answer = prompt("Pick between rock, paper or scissors:", "Your answer");

    if (answer === null) {
      console.log("Game exited");
      return;
    } else {
      playerSelection = answer.toLowerCase();
    }

    if (!validOptions.includes(playerSelection)) {
      alert("You must pick a valid answer. Try again!");
    }
  } while (!validOptions.includes(playerSelection));

  return playerSelection;
}

console.log(getComputerChoice());
console.log(getPlayerChoice());
