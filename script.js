const computerArray = ['👊', '✋', '🤞'];

const rock = document.querySelector('#rock-button');
const paper = document.querySelector('#paper-button');
const scissor = document.querySelector('#scissor-button');

const playerSign = document.querySelector('#player-sign');
const computerSign = document.querySelector('#computer-sign');

const playerScore = document.querySelector('#player-sign + .score-text');
const computerScore = document.querySelector('#computer-sign + .score-text');


const modal = document.querySelector('.modal');
const winnerText = document.querySelector('.winner');
const againButton = document.querySelector('.play-again');
const closeButton = document.querySelector('.close');

const overlay = document.querySelector('.overlay');

let CS = 0;
let PS = 0;

function clickRock() {
    playerSign.textContent = '👊';
    let id = randomElement();
    if (id === 1){
        CS++;
        computerScore.textContent = `Computer: ${CS}`;
    } else if (id === 2){
        PS++;
        playerScore.textContent = `Player: ${PS}`;
    }
    winnerWinner();
}
function clickPaper() {
    playerSign.textContent = '✋';
    let id = randomElement();
    if (id === 2){
        CS++;
        computerScore.textContent = `Computer: ${CS}`;
    } else if (id === 0){
        PS++;
        playerScore.textContent = `Player: ${PS}`;
    }
    winnerWinner();
}
function clickScissor() {
    playerSign.textContent = '🤞';
    let id = randomElement();
    if (id === 0){
        CS++;
        computerScore.textContent = `Computer: ${CS}`;
    } else if (id === 1){
        PS++;
        playerScore.textContent = `Player: ${PS}`;
    }
    winnerWinner();
}
function randomElement() {
    let random = Math.floor(Math.random() * 3);
    computerSign.textContent = computerArray[random];
    return random;
}

rock.addEventListener('click', clickRock);
paper.addEventListener('click', clickPaper);
scissor.addEventListener('click', clickScissor);

function winnerWinner() {
    if (PS == 5){
        PWins();
    } else if (CS == 5){
        CWins();
    }    
}

function PWins() {
    winnerText.textContent = "Player wins!";
    overlay.style.display = 'block';
    modal.style.display = 'block';
}
function CWins() {
    winnerText.textContent = "Computer wins!";
    overlay.style.display = 'block';
    modal.style.display = 'block';
}

againButton.addEventListener('click', playAgain);
closeButton.addEventListener('click', playAgain);

function playAgain() {
    PS = 0;
    CS = 0;
    playerScore.textContent = "Player: 0";
    computerScore.textContent = "Computer: 0";
    playerSign.textContent = '?';
    computerSign.textContent = '?';
    modal.style.display = 'none';
    overlay.style.display = 'none';
}