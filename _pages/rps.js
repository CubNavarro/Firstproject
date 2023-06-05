

// Create elements and apply CSS styles
const body = document.body;
body.style.fontFamily = "Arial, sans-serif";
body.style.textAlign = "center";

const h1 = document.createElement("h1");
h1.textContent = "Rock, Paper, Scissors";
h1.style.color = "#333";
body.appendChild(h1);

const p = document.createElement("p");
p.textContent = "Choose Rock, Paper, or Scissors:";
body.appendChild(p);

const choices = ["rock", "paper", "scissors"];
for (const choice of choices) {
  const button = document.createElement("button");
  button.textContent = choice;
  button.classList.add("choice-button");
  button.addEventListener("click", function() {
    playGame(choice);
  });
  body.appendChild(button);
}

const result = document.createElement("div");
result.classList.add("result");
body.appendChild(result);

// Game logic
function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  const gameResult = determineWinner(playerChoice, computerChoice);

  result.textContent = `You chose ${playerChoice}. The computer chose ${computerChoice}.\n\n${gameResult}`;
}

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "Congratulations! You win!";
  } else {
    return "Sorry, you lose. Better luck next time!";
  }
}
