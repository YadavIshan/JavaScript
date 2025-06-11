'use strict';

// Always set highscore from localStorage (default to 0 if not set)
document.querySelector('.highscore').textContent =
  localStorage.getItem('highscore') || 0;

let secretValue = Math.trunc(Math.random() * 20) + 1;
let score = 10;
console.log(secretValue);

document.querySelector('.check').addEventListener('click', function () {
  const choosenNumber = Number(
    document.getElementsByClassName('guess')[0].value
  );
  document.getElementsByClassName('guess')[0].value = '';
  if (!choosenNumber && choosenNumber !== 0) {
    document.querySelector('.message').textContent =
      'Ooopss !!! Please choose a number. 🙅';
  } else if (choosenNumber === secretValue) {
    document.querySelector('.message').textContent =
      'Congratulations !!! You Won . 🎉🍾';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').innerHTML = secretValue;

    let highScore = Number(localStorage.getItem('highscore')) || 0;
    if (score > highScore) {
      highScore = score;
      localStorage.setItem('highscore', highScore);
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (choosenNumber < secretValue && score > 1) {
    document.querySelector('.message').textContent = 'Too Low !! 👇📉';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (choosenNumber > secretValue && score > 1) {
    document.querySelector('.message').textContent = 'Too High !! ☝️📈';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent =
      'Better luck Next time ! 🙅';
    score = 0;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = 'red';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  location.reload();
});
