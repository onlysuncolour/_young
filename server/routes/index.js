var express = require('express');
var router = express.Router();

var tokenList = require('./login').tokens;

router.get('*', function(req, res, next) {
  console.log(tokenList);
  next()
})
router.post('*', function(req, res, next) {
  console.log(tokenList);
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
