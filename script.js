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
    console.log(`player: ${playerSelection}\ncomputer: ${computerSelection}\n`);
}

function checkIfScissors(playerSelection) {
    return (playerSelection == "scissors" ? "" : "s"); 
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "paper" && computerSelection === "scissors") {
        printChoices(playerSelection, computerSelection)
        console.log('You lose! Scissors beat paper.');
        return 'You lose! Scissors beat paper.';
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        printChoices(playerSelection, computerSelection)
        console.log('You lose! Paper beats rock.');
        return 'You lose! Paper beats rock.'
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        printChoices(playerSelection, computerSelection)
        console.log("You lose! Rock beats scissors");
        return "You lose! Rock beats scissors";
    } else if (playerSelection === computerSelection) {
        printChoices(playerSelection, computerSelection)
        console.log("Draw");
        return "Draw"
    } else {
        printChoices(playerSelection, computerSelection)
        console.log(`You win! ${capitalize(playerSelection)} beat${checkIfScissors(playerSelection)} ${computerSelection}`);
        return `You win! ${capitalize(playerSelection)} beat${checkIfScissors(playerSelection)} ${computerSelection}`;
    }

}

// function game() {
//     for (let i = 0; i < 5; i++) {
//         const playerSelection = prompt("Rock, paper or scissors:");
//         const computerSelection = getComputerChoice();
//         playRound(playerSelection, computerSelection);
//     }
// }
// game();

const buttons = document.querySelectorAll('button');
const scoreContainer = document.querySelector('#score');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        scoreContainer.textContent = playRound(button.textContent, getComputerChoice());
    })
})
