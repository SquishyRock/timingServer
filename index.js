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

let vanGogh;
let monet;
let aotb1;
let aotb2;

let time7;
let time8;
let time5;
let time6;

function timer2() {
  start = Date.now();
  console.log("Starting Base Timer:", Date(start), "In Milli:", start);
}
timer2();

function vanGoghTimer() {
  vanGogh = Date.now();
  console.log("Starting Van Gogh Timer:", Date(vanGogh), "In Milli:", vanGogh);
}
vanGoghTimer();

function monetTimer() {
  monet = Date.now();
  console.log("Starting Monet Timer:", Date(monet), "In Milli:", monet);
}
monetTimer();

function aotbTimer1() {
  aotb1 = Date.now();
  // console.log("Starting Monet Timer:", Date(aotb1), "In Milli:", aotb1);
}
aotbTimer1();

function aotbTimer2() {
  aotb2 = Date.now();
  // console.log("Starting Monet Timer:", Date(aotb2), "In Milli:", aotb2);
}
aotbTimer2();

function timer5() {
  time5 = Date.now();
  // console.log("Starting Monet Timer:", Date(time1), "In Milli:", time1);
}
timer5();

function timer6() {
  time6 = Date.now();
  // console.log("Starting Monet Timer:", Date(time2), "In Milli:", time2);
}
timer6();

function timer7() {
  time7 = Date.now();
  // console.log("Starting Monet Timer:", Date(time3), "In Milli:", time3);
}
timer7();

function timer8() {
  time8 = Date.now();
  // console.log("Starting Monet Timer:", Date(time4), "In Milli:", time4);
}
timer8();


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

app.post('/vgtime', (req, res) => {
  console.log('time requested');
  // let roundedCount = Math.floor(100 * count) / 100;
  const x = (Date.now() - vanGogh) / 1000;
  const roundedCount = Math.floor(100 * x) / 100;
  res.send({ roundedCount });
});

app.post('/vgreset', (req, res) => {
  console.log(req);
  vanGoghTimer();
  res.send('Reset successful');
});

app.post('/monettime', (req, res) => {
  console.log('time requested');
  // let roundedCount = Math.floor(100 * count) / 100;
  const x = (Date.now() - monet) / 1000;
  const roundedCount = Math.floor(100 * x) / 100;
  res.send({ roundedCount });
});

app.post('/monetreset', (req, res) => {
  console.log(req);
  monetTimer();
  res.send('Reset successful');
});

app.post('/aotb1time', (req, res) => {
  console.log('time requested');
  // let roundedCount = Math.floor(100 * count) / 100;
  const x = (Date.now() - aotb1) / 1000;
  const roundedCount = Math.floor(100 * x) / 100;
  res.send({ roundedCount });
});

app.post('/aotb1reset', (req, res) => {
  console.log(req);
  aotbTimer1();
  res.send('Reset successful');
});

app.post('/aotb2time', (req, res) => {
  console.log('time requested');
  // let roundedCount = Math.floor(100 * count) / 100;
  const x = (Date.now() - aotb1) / 1000;
  const roundedCount = Math.floor(100 * x) / 100;
  res.send({ roundedCount });
});

app.post('/aotb2reset', (req, res) => {
  console.log(req);
  aotbTimer2();
  res.send('Reset successful');
});

app.post('/time5', (req, res) => {
  console.log('time requested');
  // let roundedCount = Math.floor(100 * count) / 100;
  const x = (Date.now() - time5) / 1000;
  const roundedCount = Math.floor(100 * x) / 100;
  res.send({ roundedCount });
});

app.post('/time5reset', (req, res) => {
  console.log(req);
  timer5();
  res.send('Reset successful');
});

app.post('/time6', (req, res) => {
  console.log('time requested');
  // let roundedCount = Math.floor(100 * count) / 100;
  const x = (Date.now() - time6) / 1000;
  const roundedCount = Math.floor(100 * x) / 100;
  res.send({ roundedCount });
});

app.post('/time6reset', (req, res) => {
  console.log(req);
  timer6();
  res.send('Reset successful');
});

app.post('/time7', (req, res) => {
  console.log('time requested');
  // let roundedCount = Math.floor(100 * count) / 100;
  const x = (Date.now() - time7) / 1000;
  const roundedCount = Math.floor(100 * x) / 100;
  res.send({ roundedCount });
});

app.post('/time7reset', (req, res) => {
  console.log(req);
  timer7();
  res.send('Reset successful');
});

app.post('/time8', (req, res) => {
  console.log('time requested');
  // let roundedCount = Math.floor(100 * count) / 100;
  const x = (Date.now() - time8) / 1000;
  const roundedCount = Math.floor(100 * x) / 100;
  res.send({ roundedCount });
});

app.post('/time8reset', (req, res) => {
  console.log(req);
  timer8();
  res.send('Reset successful');
});

app.listen(3000, () => {
  console.log('express listening on: Port 3000');
});


// Minutes - 34 x 60000 - 2,040,000
// Seconds - 59 x 1000 - 59,000
// Millisecond - (22/25) x 1000 - 880
// Total - 2,099,880
