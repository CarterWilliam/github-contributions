'use strict';

const request = require('request');

class HttpClient {

  get(url, headers) {
    const httpRequest = {
      url: url,
      headers: headers
    }

    return new Promise(
      (resolve, reject) => {
        request.get(httpRequest, (error, response) => {
          if (error) {
            reject(error)
          } else {
            resolve(response)
          }
        })
      }
    )
  }

  post(url, headers, body) {
    const httpRequest = {
      url: url,
      headers: headers,
      body: body
    }

    return new Promise(
      (resolve, reject) => {
        request.post(httpRequest, (error, response) => {
          if (error) {
            reject(error)
          } else {
            resolve(response)
          }
        })
      }
    )
  }

}

module.exports = HttpClient;
