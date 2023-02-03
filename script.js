function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    if (randomNumber < 4) {
        return "rock";
    } else if (randomNumber < 7) {
        return "paper";
    } else {
        return "scissors";
    }
}

function capitalize(string) {
    return string.substr(0, 1).toUpperCase() + string.slice(1);
}

function printChoices(playerSelection, computerSelection) {
    console.log(`player: ${playerSelection}\ncomputer: ${computerSelection}\n`)
}

function checkInput(playerSelection) {

}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    
    if (playerSelection === "paper" && computerSelection === "scissors") {
        printChoices(playerSelection, computerSelection)
        console.log('You lose! Scissors beat paper.');
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        printChoices(playerSelection, computerSelection)
        console.log('You lose! Paper beats rock.');
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        printChoices(playerSelection, computerSelection)
        console.log("You lose! Rock beats scissors");
    } else if (playerSelection === computerSelection) {
        printChoices(playerSelection, computerSelection)
        console.log("Draw");
    } else {
        printChoices(playerSelection, computerSelection)
        console.log(`You win! ${capitalize(playerSelection)} beats ${computerSelection}`);
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, paper or scissors:");
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }

}

game();
