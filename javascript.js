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
    for (let i = 0; i < 5; i++) {
        userChoice = prompt("Do you choose Rock, Paper, or Scissors? ");
        computerChoice = getComputerChoice();
        const result = playRound(userChoice, computerChoice);
        console.log(`User's choice: ${userChoice}`);
        console.log(`Computer: ${computerChoice}`);
        console.log(result);
        if (result.substring(0, 8) === "You Win!") {
            userScore++;
        } else if (result.substring(0, 9) === "You Lose!") {
            computerScore++;
        }
        console.log(`User's Score: ${userScore}`);
        console.log(`Computer's Score: ${computerScore}`);
    }
    if (userScore > computerScore) {
        console.log("You are the winner!");
    } else if (userScore < computerScore) {
        console.log("Try again, the computer won!");
    } else {
        console.log("Play again, it's a tie score!");
    }
}
console.log(game());