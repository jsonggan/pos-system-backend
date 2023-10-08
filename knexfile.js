module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      port: 33061,
      user: 'songnux',
      password: '020919',
      database: 'pos_system',
    },
    migrations: {
      directory: './src/services/database/migrations',
    },
  },
};