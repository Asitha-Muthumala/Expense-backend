const mysql = require("mysql");

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "expense_tracker"
});

conn.connect();

module.exports = conn;