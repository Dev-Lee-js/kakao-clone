const mysql = require("mysql");

const db = mysql.createConnection({
  host: "database123.cxav9hcvouae.ap-northeast-2.rds.amazonaws.com",
  user: "admin",
  password: "123456789",
  database:"database123",
});

db.connect();

module.exports = db;
