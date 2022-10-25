function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
  let choice = prompt("Rock, Paper, or Scissors?");
  return choice.toLowerCase();
}

function playRound(playerSelection, computerSelection, score) {
  if (playerSelection === computerSelection) {
    updateScore(score, "tie");
    return "It's a tie";
  }

  if (playerSelection === "rock"  && computerSelection === "scissors") {
    updateScore(score, "player");
    return `You win! ${playerSelection} beats ${computerSelection}!`
  }

  if (playerSelection === "paper" && computerSelection === "rock") {
    updateScore(score, "player");
    return `You win! ${playerSelection} beats ${computerSelection}!`
  }

  if (playerSelection === "scissors" && computerSelection === "paper") {
    updateScore(score, "player");
    return `You win! ${playerSelection} beats ${computerSelection}!`
  }

  updateScore(score, "computer");
  return `You lose! ${computerSelection} beats ${playerSelection}!`;
}

function updateScore(score, winner) {
  switch(winner) {
    case "player": 
      score["player"]++;
      break;
    case "computer":
      score["computer"]++;
      break;
    default:
      score["tie"]++;
  }
}

function game() {
  let score = {"player": 0, 
               "computer": 0, 
               "tie": 0
              }

  for (i = 0; i < 5; i++) {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();

    console.log(playRound(playerChoice, computerChoice, score));
  }

  console.log(`Player Score: ${score["player"]}\nComputer Score: ${score["computer"]}\nTies: ${score["tie"]}`);
}
