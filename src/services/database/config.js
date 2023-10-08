const config = {
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    host: "localhost",
    user: "songnux",
    port: 33061,
    password: "020919",
    database: "pos_system",
    connectTimeout: 60000
  },
  listPerPage: 10,
};
module.exports = config;