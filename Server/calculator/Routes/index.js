var express = require('express');
var router = express.Router();

var operations = require('../public/operations.js')

router.get('/', (req, res) => {
  console.log('Backend is up!');
  res.status(200).send('Success! Website is alive.');
});


router.post('/sum', (req, res) => {
  var ans = operations.sum(JSON.parse(req.body.left), JSON.parse(req.body.right));
  res.status(200).send(`${ans}`);
});

router.post('/difference', (req, res) => {
  var ans = operations.diff(JSON.parse(req.body.left), JSON.parse(req.body.right));
  res.status(200).send(`${ans}`);
});

router.post('/product', (req, res) => {
  var ans = operations.product(JSON.parse(req.body.left), JSON.parse(req.body.right));
  res.status(200).send(`${ans}`);
});

router.post('/quotient', (req, res) => {
  var ans = operations.quotient(JSON.parse(req.body.left), JSON.parse(req.body.right));
  res.status(200).send(`${ans}`);
});

module.exports = router;
