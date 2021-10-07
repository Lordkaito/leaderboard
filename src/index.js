import './style.css';
import { newUser, getScores, newGame } from './api.js';

const userValue = document.querySelector('#name');
const scoreValue = document.querySelector('#score');
const points = document.querySelector('#points');
const refresh = document.querySelector('#refresh');
const submit = document.querySelector('#submit');
const title = document.querySelector('#title');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  if (userValue.value === '' || scoreValue.value === '') {
    userValue.setCustomValidity('Please enter a name and score');
    userValue.reportValidity();
  } else if (scoreValue.value > 999) {
    scoreValue.setCustomValidity('Score must be less than 999');
    scoreValue.reportValidity();
  } else {
    newUser(userValue.value, scoreValue.value);
    getScores(points);
    userValue.value = '';
    scoreValue.value = '';
  }
});

refresh.addEventListener('click', () => {
  location.reload();
});

newGame();
getScores(points);

