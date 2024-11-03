const mysql = require('mysql2/promise')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'employee_db',
  password:''
})

module.exports = pool;