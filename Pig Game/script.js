'use strict';

let playerScore = new Array(2, 0);

let currentPlayer = 1;

let currentPlayerScore = new Array(2, 0);

let scoreCardPlayerOne = document.querySelector('#score--1');
let scoreCardPlayerTwo = document.querySelector('#score--0');

// const rollDice = () =>
function rollDice() {
  return Math.trunc(Math.random() * 6) + 1;
}
const resetGame = function () {
  scoreCardPlayerOne.innerHTML = 0;
  scoreCardPlayerTwo.innerHTML = 0;
  currentPlayer = 1;
  currentPlayerScore = new Array(2, 0);
  playerScore = new Array(2, 0);
};

// Attach event listener after DOM is loaded
document
  .querySelector('.btn--new')
  .addEventListener('click', () => resetGame());

document.querySelector('.btn--roll').addEventListener('click', function () {
  let roll = rollDice();
  // let currentScore = 0;
  if (roll === 1) {
    currentPlayerScore[currentPlayer] = 0;
    document.querySelector(`#current--${currentPlayer}`).innerHTML = 0;
    currentPlayer = Number(!currentPlayer);
  } else {
    currentPlayerScore[currentPlayer] += roll;
    console.log(
      currentPlayerScore[currentPlayer],
      ' ',
      currentPlayer,
      ' ',
      roll
    );
    document.querySelector(`#current--${currentPlayer}`).innerHTML =
      currentPlayerScore[currentPlayer];
    if (currentPlayerScore[currentPlayer] >= 100) {
    }
  }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  playerScore[currentPlayer] += currentPlayerScore[currentPlayer];
  document.querySelector(`#score--${currentPlayer}`).innerHTML =
    playerScore[currentPlayer];
  currentPlayerScore[currentPlayer] = 0;
  document.querySelector(`#current--${currentPlayer}`).innerHTML = 0;
  currentPlayer = Number(!currentPlayer);
});
