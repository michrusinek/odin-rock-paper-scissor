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
            msg:"Game Over!\n You won!",
            isOver: true
        };
    } else if (computerScore === 5) {
        return {
            msg:"Game Over!\n You lost!",
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
            msg:'You lose!\n Scissors beat paper.',
            playerWin: false,
            computerWin: true
        }
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        printChoices(playerSelection, computerSelection)
        return {
            msg:'You lose!\n Paper beats rock.',
            playerWin: false,
            computerWin: true
        }
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        printChoices(playerSelection, computerSelection)
        return {
            msg:"You lose!\n Rock beats scissors.",
            playerWin: false,
            computerWin: true
        }
    } else if (playerSelection === computerSelection) {
        printChoices(playerSelection, computerSelection)
        return {
            msg:"Draw.\n",
            playerWin: false,
            computerWin: false
        }
    } else {
        printChoices(playerSelection, computerSelection)
        return {
            msg:`You win!\n ${capitalize(playerSelection)} beat${checkIfScissors(playerSelection)} ${computerSelection}.`,
            playerWin: true,
            computerWin: false
        }
    }

}

const buttons = document.querySelectorAll('button');
const btnContainer = document.querySelector('#buttons-container');
const scoreContainer = document.querySelector('#score');
let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener('click', function() {
        const buttonDesc = document.querySelector('.description');
        result = playRound(buttonDesc.textContent, getComputerChoice());

        playerScore = countScore(
            result.playerWin, result.computerWin,
            playerScore, computerScore
            ).player;

        computerScore = countScore(
            result.playerWin, result.computerWin,
            playerScore, computerScore
            ).computer;

        if (checkIfGameOver(playerScore, computerScore).isOver) {

            scoreContainer.textContent = 
            checkIfGameOver(playerScore, computerScore).msg
            +
            `\nPLAYER: ${playerScore}  COMPUTER: ${computerScore}`;

            buttons.forEach((button) => {
                button.disabled = true;
            })
        } else {
            scoreContainer.textContent = 
            result.msg
            +
            `\nPLAYER: ${playerScore}  COMPUTER: ${computerScore}`;
        }
    })
})
