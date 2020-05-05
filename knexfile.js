// Update with your config settings.

module.exports = {
  client: 'postgresql',
  connection: {
    database: 'first_site',
    user: 'postgres',
    password: '300398'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
