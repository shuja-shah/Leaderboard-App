async function refreash() {
  const req = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zblSE0KFde5ujWoC9BWc/scores/');
  const response = await req.json();
  const final = response.result;
  const tBody = document.querySelector('tBody');
  final.forEach((item) => {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdScore = document.createElement('td');
    tdName.innerHTML = item.user;
    tdScore.innerHTML = item.score;
    tr.appendChild(tdName);
    tr.appendChild(tdScore);
    tBody.appendChild(tr);
  });
}

module.exports = refreash;