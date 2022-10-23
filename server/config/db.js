const mysql = require('mysql')

const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "secretpassword",
database:"site_users" 
})

module.exports = db;