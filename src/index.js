import './style.css';
import showleaderboard from './scoreboard.js';
import showScores from './refreash.js';
import addTheScores from './addScores.js';

fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
  method: 'POST',
  body: JSON.stringify({
    name: 'Apex Legends',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((game) => {
    const gameId = game.result;
    console.log(gameId);
  });
showleaderboard();
const re = document.querySelector('.btn-re');
re.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.reload();
});

const sumbit = document.getElementById('submit');
sumbit.addEventListener('click', (e) => {
  e.preventDefault();
  addTheScores();
});

const tBody = document.createElement('tBody');
const leadBody = document.querySelector('table');
leadBody.appendChild(tBody);

document.addEventListener('DOMContentLoaded', showScores);