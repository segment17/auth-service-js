'use strict';

var mysql = require('mysql');

//TODO: Create database and table during DevOps
/*
CREATE TABLE admins (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(32) NOT NULL,
  password_hash VARCHAR(64) NOT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE test_admins (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(32) NOT NULL,
  password_hash VARCHAR(64) NOT NULL,
  PRIMARY KEY (id)
);
INSERT INTO admins (username, password_hash) values ('test-admin', '13019e4c76dbb79db5c2562ad0572f74');
INSERT INTO test_admins (username, password_hash) values ('test-admin', '13019e4c76dbb79db5c2562ad0572f74');
*/

const connectionSetup = {
  host: process.env.AUTH_MYSQL_SERVICE_ADDR || "localhost",
  user: "root",
  password: "root",
  database: "authservice"
};
console.log(connectionSetup);
var connection = mysql.createConnection(connectionSetup);

connection.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected!");
  }
});

module.exports = { connection };
