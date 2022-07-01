console.log('Work!');

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 20;
let highScore = 0;

const btnCheck = document.querySelector('.check');
const number = document.querySelector('.number');
const message = document.querySelector('.message');
const again = document.querySelector('.again');
const scoreEl = document.querySelector('.score');
const highScoreEl = document.querySelector('.highscore');
const form = document.querySelector('#form');

function displayMessage(message) {
  const messageEl = document.querySelector('.message');
  messageEl.textContent = message;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('⛔️ No number!');
  } else if (guess === secretNumber && score > highScore) {
    displayMessage('🎉 Correct Number!');
    number.textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    number.style.width = '30rem';

    highScore = score;
    highScoreEl.textContent = highScore;
  } else if (guess !== secretNumber && score > 0) {
    displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
    score--;
    scoreEl.textContent = score;
  } else {
    displayMessage('💥 You lost the game!');

    setTimeout(() => {
      startGame();
    }, 2000);
  }
});

function startGame() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 100) + 1;

  displayMessage('Start guessing...');

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
}

again.addEventListener('click', startGame);
