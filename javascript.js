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
