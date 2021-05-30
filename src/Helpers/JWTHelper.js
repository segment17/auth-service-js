const jwt = require('jsonwebtoken');
const K = require('../Constants/K');

function verify(token) {
  console.log('verify jwt token: ', token);
  return new Promise((resolve, reject) => {
    jwt.verify(token, K.jwtAppSecret, (error, token) => {
      if (error) {
        console.log('jwt error: ', error);
        resolve(null);
      }
      else {
        console.log('jwt token: ', token);
        resolve(token);
      }
    });
  });
}

module.exports = {
  verify,
}