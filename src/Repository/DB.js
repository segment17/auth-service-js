'use strict';

var mysql = require('mysql');

const connectionSetup = {
  host: process.env.AUTH_MYSQL_SERVICE_SERVICE_HOST != undefined ? process.env.AUTH_MYSQL_SERVICE_SERVICE_HOST : "localhost",
  user: "root",
  password: "root",
  database: "authservice"
};

console.log(connectionSetup);
var connection = mysql.createConnection(connectionSetup);

connection.connect(function (err) {
    console.log(err ? err : "Connected!");
});

module.exports = { connection };
