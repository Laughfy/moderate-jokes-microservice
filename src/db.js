const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
});

connection.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }

  console.log("Connected to MySQL");
});

module.exports = connection;
