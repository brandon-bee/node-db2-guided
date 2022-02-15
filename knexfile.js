module.exports = {
  // different configs for different DBs
  development : {
    client: 'sqlite3',
    connection: {
      filename: './data/produce.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }
}