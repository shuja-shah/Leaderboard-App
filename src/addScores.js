const addTheScores = () => {
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;

  const sendData = async () => {
    const dataSent = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zblSE0KFde5ujWoC9BWc/scores/', {
      method: 'POST',
      body: JSON.stringify({
        user: name,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return dataSent.status;
  };
  sendData();
};
module.exports = addTheScores;