function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    if (randomNumber < 4) {
        return "rock";
    } else if (randomNumber < 7) {
        return "paper";
    } else {
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    
    if (playerSelection === "paper" && computerSelection === "scissors") {
        return 'You lose! Scissors beat paper.';
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return 'You lose! Paper beats rock.';
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors";
    } else if (playerSelection === computerSelection) {
        return "Stalemate"
    } else {
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
}

const playerSelection = "ROCK"
const computerSelection = getComputerChoice()

console.log(playRound(playerSelection, computerSelection))
