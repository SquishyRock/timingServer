const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

let start;
function timer2() {
  start = Date.now();
  console.log("Starting Timer:", Date(start), "In Milli:", start);
  setInterval(timer2, 2099880);
}
timer2();


app.post('/time', (req, res) => {
  console.log('time requested');
  // let roundedCount = Math.floor(100 * count) / 100;
  const x = (Date.now() - start) / 1000;
  const roundedCount = Math.floor(100 * x) / 100;
  res.send({ roundedCount });
});

app.post('/reset', (req, res) => {
  console.log(req);
  timer2();
  res.send('Reset successful');
});

app.listen(3000, () => {
  console.log('express listening on: Port 8080');
});


// Minutes - 34 x 60000 - 2,040,000
// Seconds - 59 x 1000 - 59,000
// Millisecond - (22/25) x 1000 - 880
// Total - 2,099,880