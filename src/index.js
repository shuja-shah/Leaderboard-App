import './style.css';
import showleaderboard from './scoreboard.js';
import refreash from './refreash.js';
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
  refreash();
});

const sumbit = document.getElementById('submit');
sumbit.addEventListener('click', (e) => {
  e.preventDefault();
  addTheScores();
});