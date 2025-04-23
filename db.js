// db.js
import mysql from "mysql2/promise";

// Update these credentials to match your MySQL server
export const pool = mysql.createPool({
  host: "localhost", // or your remote host
  user: "your_mysql_user",
  password: "your_mysql_password",
  database: "portfolio",
  waitForConnections: true,
  connectionLimit: 10,
});
