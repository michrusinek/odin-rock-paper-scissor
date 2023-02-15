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

function countScore(playerWin = false, computerWin = false, playerScore, computerScore) {
    if (playerWin) {
        playerScore++;
    } else if (computerWin) {
        computerScore++;
    }
    return {player: playerScore, computer: computerScore};
}

function checkIfGameOver(playerScore, computerScore) {
    if (playerScore === 5) {
        return{
            msg:"You won the round!",
            isOver: true
        };
    } else if (computerScore === 5) {
        return {
            msg:"You lost the round!",
            isOver: true
        };
    } else {
        return {isOver: false};
    }
}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "paper" && computerSelection === "scissors") {
        printChoices(playerSelection, computerSelection)
        return {
            msg:'You lose! Scissors beat paper.',
            playerWin: false,
            computerWin: true
        }
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        printChoices(playerSelection, computerSelection)
        return {
            msg:'You lose! Paper beats rock.',
            playerWin: false,
            computerWin: true
        }
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        printChoices(playerSelection, computerSelection)
        return {
            msg:"You lose! Rock beats scissors",
            playerWin: false,
            computerWin: true
        }
    } else if (playerSelection === computerSelection) {
        printChoices(playerSelection, computerSelection)
        return {
            msg:"Draw",
            playerWin: false,
            computerWin: false
        }
    } else {
        printChoices(playerSelection, computerSelection)
        return {
            msg:`You win! ${capitalize(playerSelection)} beat${checkIfScissors(playerSelection)} ${computerSelection}`,
            playerWin: true,
            computerWin: false
        }
    }

}

const buttons = document.querySelectorAll('button');
const scoreContainer = document.querySelector('#score');
let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener('click', function() {
        result = playRound(button.textContent, getComputerChoice())

        playerScore = countScore(
            result.playerWin, result.computerWin,
            playerScore, computerScore
            ).player;

        computerScore = countScore(
            result.playerWin, result.computerWin,
            playerScore, computerScore
            ).computer;

        if (checkIfGameOver(playerScore, computerScore).isOver) {
            console.log("Game over");
            scoreContainer.textContent = 
            checkIfGameOver(playerScore, computerScore).msg
            +
            `\nScore\nPlayer: ${playerScore}
            \nComputer: ${computerScore}`;
        } else {
            scoreContainer.textContent = 
            result.msg
            +
            `\nScore\nPlayer: ${playerScore}
            \nComputer: ${computerScore}`;
        }
        // scoreContainer.textContent = 
        // result.msg
        // +
        // `\nScore\nPlayer: ${playerScore}
        // \nComputer: ${computerScore}`;
        // console.log(checkIfGameOver(playerScore, computerScore));
    })
})
