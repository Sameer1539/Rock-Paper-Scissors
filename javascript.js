function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);
    let choice = "";
    if (randNum === 0) {
        choice = "Rock";
    } else if (randNum === 1) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You Lose! Paper beats Rock";
        } else if (computerSelection === "scissors") {
            return "You Win! Rock beats Scissors";
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You Win! Paper beats Rock";
        } else if (computerSelection === "scissors") {
            return "You Lose! Scissors beats Paper";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "You Win! Scissors beats Paper";
        } else if (computerSelection === "rock") {
            return "You Lose! Rock beats Scissors";
        }
    }
    return "Tied!";
}

function game() {
    rockBtn.addEventListener('click', () => roundResult.textContent = `${playRound("Rock", getComputerChoice())}`);
    paperBtn.addEventListener('click', () => roundResult.textContent = `${playRound("Paper", getComputerChoice())}`);
    scissorsBtn.addEventListener('click', () => roundResult.textContent = `${playRound("Scissors", getComputerChoice())}`);
    let userScore = 0;
    let computerScore = 0;

    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (roundResult.textContent.substring(0, 8) === "You Win!") {
                userScore++;
            } else if (roundResult.textContent.substring(0, 9) === "You Lose!") {
                computerScore++;
            }
            runningScore.textContent = `User's Score: ${userScore}; Computer's Score: ${computerScore}`;
            if (userScore == 5 || computerScore == 5) {
                if (userScore > computerScore) {
                    winner.textContent = "You are the winner!";
                } else if (userScore < computerScore) {
                    winner.textContent = "Try again, the computer won!";
                }
                return;
            }
        });
    });
}

const body = document.querySelector('body');

const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');
const roundResult = document.createElement('div');
const runningScore = document.createElement('p');
const winner = document.createElement('p');


rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";

body.appendChild(rockBtn);
body.appendChild(paperBtn);
body.appendChild(scissorsBtn);
body.appendChild(roundResult);

game();

body.appendChild(runningScore);
body.appendChild(winner);

