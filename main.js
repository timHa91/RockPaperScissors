const roundLength = 5
const choice = ['Rock', 'Paper', 'Scissor'];
game();

function game () {
    let round = 1;
    while(round <= roundLength) {
        round++;
        const playerSelection = prompt('Rock, Paper or Scissor?');
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choice.length);
    return choice[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    const computer = computerSelection.toLowerCase();
    const player = playerSelection.toLowerCase();
    const playerSelectionFormated = player[0].toUpperCase() + player.slice(1);
    const rules = {
        rock: 'scissor',
        scissor: 'paper',
        paper: 'rock'
    }

    if(player == computer) {
        return 'Draw! Go again';
    }
    else if (computer == rules[player]) {
        return `You Win! ${playerSelectionFormated} beats ${computerSelection}`
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelectionFormated}`;
    }
}