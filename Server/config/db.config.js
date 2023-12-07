"user strict";

const mysql = require("mysql");

// Mysql Database Coneection
const dbConn = mysql.createConnection({
  host: "20.126.129.72",
  user: "root",
  password: "password",
  database: "bookly",
});

dbConn.connect(function (err) {
  if (err) throw err;
  console.log("Database connection established");
});
module.exports = dbConn;
