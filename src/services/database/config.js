require('dotenv').config();

const config = {
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectTimeout: process.env.DB_CONNECT_TIMEOUT
  },
  listPerPage: 10,
};
module.exports = config;