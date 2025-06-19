'use strict';

let playerScore = [0, 0];
let currentPlayer = 0;
let currentPlayerScore = [0, 0];

let scoreCardPlayerOne = document.querySelector('#score--0');
let scoreCardPlayerTwo = document.querySelector('#score--1');
let dice = document.querySelector('.dice');

function rollDice() {
  let rolledNumber = Math.trunc(Math.random() * 6) + 1;
  dice.src = `dice-${rolledNumber}.png`;
  dice.style.display = 'block';
  return rolledNumber;
}

function switchPlayer() {
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.remove('player--active');
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.add('player--active');
}

function resetGame() {
  playerScore = [0, 0];
  currentPlayerScore = [0, 0];
  currentPlayer = 0;
  scoreCardPlayerOne.textContent = 0;
  scoreCardPlayerTwo.textContent = 0;
  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#current--1').textContent = 0;
  dice.style.display = 'none';

  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
  document.querySelector('.btn--roll').disabled = false;
  document.querySelector('.btn--hold').disabled = false;
}

document.querySelector('.btn--new').addEventListener('click', resetGame);

document.querySelector('.btn--roll').addEventListener('click', function () {
  let roll = rollDice();
  if (roll === 1) {
    currentPlayerScore[currentPlayer] = 0;
    document.querySelector(`#current--${currentPlayer}`).textContent = 0;
    switchPlayer();
  } else {
    currentPlayerScore[currentPlayer] += roll;
    document.querySelector(`#current--${currentPlayer}`).textContent =
      currentPlayerScore[currentPlayer];
  }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  playerScore[currentPlayer] += currentPlayerScore[currentPlayer];
  document.querySelector(`#score--${currentPlayer}`).textContent =
    playerScore[currentPlayer];
  currentPlayerScore[currentPlayer] = 0;
  document.querySelector(`#current--${currentPlayer}`).textContent = 0;

  if (playerScore[currentPlayer] >= 10) {
    document
      .querySelector(`.player--${currentPlayer}`)
      .classList.add('player--winner');
    document.querySelector('.btn--roll').disabled = true;
    document.querySelector('.btn--hold').disabled = true;
    dice.style.display = 'none';
    return;
  }
  switchPlayer();
});
