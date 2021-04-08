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
*/

var connection = mysql.createConnection({
  host: process.env.AUTH_MYSQL_SERVICE_SERVICE_HOST,
  user: "root",
  password: "root",
  database: "authservice"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = { connection };
