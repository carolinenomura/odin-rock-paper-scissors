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

function playRound(playerSelection, computerSelection) {
  // Player cancels out of prompt
  if (playerSelection === undefined) {
    return "Player chickened out... Cluck!";
  }

  // Win combinations array
  const wins = [
    ["rock", "scissors"],
    ["scissors", "paper"],
    ["paper", "rock"],
  ];
  let combination = [playerSelection, computerSelection];
  let playerWins = false;

  console.log(`The computer picked: ${computerSelection}`);

  // Tie Result
  if (playerSelection === computerSelection) {
    result = "tie";
    console.log("It's a tie.");
  } else {
    // Player win Result
    for (let i = 0; i < wins.length; i++) {
      if (JSON.stringify(combination) === JSON.stringify(wins[i])) {
        playerWins = true;
        break;
      }
    }
    if (playerWins) {
      result = "player";
      console.log(
        `Result: ${playerSelection} beats ${computerSelection}. You win this round!`
      );
    } else {
      // Computer win Result
      result = "computer";
      console.log(
        `Result: ${computerSelection} beats ${playerSelection}. You lost this round!`
      );
    }
  }

  return result;
}

function playGame() {
  let result;
  let totalPlayerWins = 0;
  let totalComputerWins = 0;

  for (let i = 0; i < 5; i++) {
    let roundResult = playRound(getPlayerChoice(), getComputerChoice());

    switch (roundResult) {
      case "tie":
        // Neither one scores
        break;
      case "player":
        totalPlayerWins++;
        break;
      case "computer":
        totalComputerWins++;
        break;
    }
  }

  // End of game messages
  if (totalPlayerWins === totalComputerWins) {
    result = "It's a draw. Boring!";
  } else if (totalPlayerWins > totalComputerWins) {
    result = "You are the winner. Congratulations!";
  } else {
    result = "Oh no, you lost... Better luck next time!";
  }

  return result;
}

// Main function call
console.log(playGame());
