const choice = ['Rock', 'Paper', 'Scissor'];
let playerSelection = '';
const maxScore = 5;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playerSelection = e.target.innerText.toLowerCase();
        playRound(playerSelection, getComputerChoice())
    })
})

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choice.length);
    return choice[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    const computer = computerSelection.toLowerCase();
    const playerSelectionFormated = playerSelection[0].toUpperCase() + playerSelection.slice(1);

    const rules = {
        rock: 'scissor',
        scissor: 'paper',
        paper: 'rock'
    }

    if(playerSelection == computer) {
        displayRoundResult('Draw! Go again');
    }
    else if (computer == rules[playerSelection]) {
        displayRoundResult(`You Win! ${playerSelectionFormated} beats ${computerSelection}`);
        addScore('player');
    } else {
        displayRoundResult(`You Lose! ${computerSelection} beats ${playerSelectionFormated}`);
        addScore('computer');
    }
}

function displayRoundResult(message){
    const result = document.querySelector('.round');
    result.innerText = message;
}

function addScore(who) {
    const score = document.querySelector(`.${who} span`);
    score.innerText = +score.innerText + 1;
    console.log(score.innerText);
    if(score.innerText == maxScore) declareWinner(who);
}

function declareWinner(who) {
    const playerWon = 'Gratulation. You won';
    const playerLose = 'You Lost. Try again';
    const displayResult = document.querySelector('.container');
    who === 'player' ? displayResult.innerText = playerWon : displayResult.innerText = playerLose;
}



