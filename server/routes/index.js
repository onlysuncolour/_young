"use strict"
var express = require('express');
var router = express.Router();
var events = require('../event').myEmitter

let tokenList = [];
router.get('*', function(req, res, next) {
  // console.log(req);
  // console.log(req);
  // events.emit('checkToken', next);
})
router.post('*', function(req, res, next) {
  console.log(req);
  if (req.url != '/login') {
    // events.emit('checkToken', next);
  }
  next()
})

let checkToken = (token) => {
  if (!token) {
    return false;
  } else {
    let tokenList = require('./routes/login').tokens;
  }
}

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/', function(req, res, next) {
  // res.sendStatus(200)
  let a = {a : 1}
  res.send(a)
});
router.get('/aa', function(req, res, next) {
  // res.sendStatus(200)
  let a = {a : 1}
  res.send(a)
});
router.get('/aaa', function(req, res, next) {
  res.sendStatus(200)
  let a = {a : 1}
  res.send(a)
});

module.exports = router;
