var express = require('express');
var router = express.Router();
var events = require('../event').myEmitter

router.post('/', function(req, res, next) {
  let loginUser = req.body;
  let userList = require('../data/users.json')
  let user = getObjByKey('username', loginUser.username, userList);
  if (!!user && user.password == loginUser.password) {
    res.send({success: true})
  } else {
    res.sendStatus(403)
  }
})

let getObjByKey = (key, value, objList) => {
  for (let i = 0; i < objList.length; i++) {
    if(objList[i][key] == value) {
      return objList[i]
    }
  }
  return false
}

events.on('hello', () => {
  console.log('get Events hello');
})

let tokens = [1,2,3,4,5];

module.exports = {router, tokens};
