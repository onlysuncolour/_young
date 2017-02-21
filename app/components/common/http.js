import server from './server.config'
import {browserHistory} from 'react-router'

let GET = function (url, params) {
  let promise = new Promise(function(resolve, reject) {
    $.ajax({
      url: server[window.env] + url,
      type: 'GET',
      data: params,
      xhrFields: {
        withCredentials: true
      },
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

let POST2 = function (url, params) {
  let promise = new Promise(function(resolve, reject) {
    $.ajax({
      url: server[window.env] + url,
      type: 'POST',
      data: params,
      xhrFields: {
        withCredentials: true
      },
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
};

let GET_fetchApi = function () {

}

let POST = function(url, params) {
  let promise = new Promise((resolve, reject) => {
    fetch(server[window.env]+url, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(resp => {
      debugger;
      // console.log(1,resp)
      resp.json().then(obj => {
        debugger;
        obj
      })
    }).then(resp => {
      debugger;
      console.log(2, resp);
    }).then(resp => {
      debugger
      console.log(3, resp);
    })

  })
}

module.exports = {GET, POST}
