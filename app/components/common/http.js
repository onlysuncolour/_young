import server from './server.config'

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
        reject(err)
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
        reject(err)
      }
    })
  })
  return promise;
}

module.exports = {GET, POST}
