async function refreash() {
  const req = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zblSE0KFde5ujWoC9BWc/scores/');
  const response = await req.json();
 console.log(response);
}
module.exports = refreash;