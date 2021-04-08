'use strict';

var mysql = require('mysql');

//TODO: Create database and table during DevOps
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
