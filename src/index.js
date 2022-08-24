import './style.css';
import showleaderboard from './scoreboard.js';

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