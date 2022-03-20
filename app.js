let scores = [0, 0];

const btns = document.querySelectorAll('button');
let userChoiceDisplay = document.getElementById('user-choice');
let computerChoiceDisplay = document.getElementById('computer-choice');
let resultDisplay = document.getElementById('result');
let playerScoreDisplay = document.getElementById('player-score');
let computerScoreDisplay = document.getElementById('computer-score');
let playerChoice;
let computerChoice;

btns.forEach(btn => btn.addEventListener('click', (e) => {
    playerChoice = e.target.id;
    userChoiceDisplay.innerText = playerChoice;
    computePlay();
    calculateResult();
}))


function computePlay() {
    let num = Math.floor(Math.random() * 3);

    if (num === 0) {
        computerChoice = 'rock'
    } else if (num === 1) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }

    computerChoiceDisplay.innerText =  computerChoice
}

function calculateResult() {
    if (
        (playerChoice === 'scissors' & computerChoice === 'paper') ||
        (playerChoice === 'paper' & computerChoice === 'rock') ||
        (playerChoice === 'rock' & computerChoice === 'scissors')
    ) {
        result = 'you won this round';
        scores[0]++;
        playerScoreDisplay.innerText = scores[0];

    } else if (playerChoice == computerChoice) {
        result = 'Draw!';
    } else {
        result = 'you lose this round';
        scores[1]++;
        computerScoreDisplay.innerText = scores[1];
    }

    resultDisplay.innerText = result;
}