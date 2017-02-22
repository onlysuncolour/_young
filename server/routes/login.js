"use strict"
var express = require('express');
var router = express.Router();
var events = require('../event').myEmitter;


router.post('/', function(req, res, next) {
  // console.log(req);
  let loginUser = req.body;
  let userList = require('../data/users.json')
  let user = getObjByKey('username', loginUser.username, userList);
  if (!!user && user.password == loginUser.password) {
    res.cookie("test123lasjf", "112233445566", {domain: null, path: null, httpOnly: true,secure: false})
    // res.append('Set-Cookie', 'test123lasjf=112233445566;HttpOnly');
    // res.setHeader("Set-Cookie", ["token=112233445566"]);

    console.log("setCookie");
    res.send({success: true})
  } else {
    res.sendStatus(403)
  }
})
router.get('/checkAuth', function(req, res, next) {
  console.log('checkAuth');
  res.send({success: true})
})

let getObjByKey = (key, value, objList) => {
  for (let i = 0; i < objList.length; i++) {
    if(objList[i][key] == value) {
      return objList[i]
    }
  }
  return false
}

// let


events.on('hello', () => {
  // console.log('get Events hello');
})

let tokens = [1,2,3,4,5];

module.exports = {router, tokens};
