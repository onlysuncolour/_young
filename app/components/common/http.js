import server from './server.config'
import {browserHistory} from 'react-router'

let GET = function (url, params) {
  let promise = new Promise(function(resolve, reject) {
    $.ajax({
      url: server[window.env] + url,
      type: 'GET',
      data: params,
      success: function(resp) {
        resolve(resp)
      },
      error: function(err) {
        if ((err.status == 403 || err.status == 401) && location.pathname != '/login') {
          browserHistory.push('/login');
        } else {
          reject(err)
        }
      }
    })
  })
  return promise;
}

let POST = function (url, params) {
  let promise = new Promise(function(resolve, reject) {
    $.ajax({
      url: server[window.env] + url,
      type: 'POST',
      data: params,
      success: function(resp) {
        resolve(resp)
      },
      error: function(err) {
        if ((err.status == 403 || err.status == 401) && location.pathname != '/login') {
          browserHistory.push('/login');
        } else {
          reject(err)
        }
      }
    })
  })
  return promise;
}

module.exports = {GET, POST}
