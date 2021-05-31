const jwt = require('jsonwebtoken');
const K = require('../Constants/K');

function verify(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, K.jwtAppSecret, (error, token) => {
      if (error) {
        console.log('jwt error: ', error);
        resolve(null);
      }
      else {
        resolve(token);
      }
    });
  });
}

module.exports = {
  verify,
}