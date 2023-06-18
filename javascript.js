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
    let userScore = 0;
    let computerScore = 0;
    let userChoice = "";
    if (userScore > computerScore) {
        console.log("You are the winner!");
    } else if (userScore < computerScore) {
        console.log("Try again, the computer won!");
    } else {
        console.log("Play again, it's a tie score!");
    }
}
console.log(game());