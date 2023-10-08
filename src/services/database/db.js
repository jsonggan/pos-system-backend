const mysql = require('mysql2/promise');
const config = require('./config');

// create a connection pool
const pool = mysql.createPool(config);

module.exports = pool;