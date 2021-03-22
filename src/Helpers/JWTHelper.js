const jwt = require('jsonwebtoken');
const K = require('../Constants/K');

function verify(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, K.jwtAppSecret, (error, token) => {
      if (error)
        resolve(null);
      else
        resolve(token);
    });
  });
}

module.exports = {
  verify,
}