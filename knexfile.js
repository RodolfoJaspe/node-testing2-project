// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault:true,
    migrations:{
      directory:"./data/migrations"
    },
    seeds:{
      directory:"./data/seeds"
    },
    connection: {
      filename: './data/players.db3'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done)
      }
    }
  },
  testing: {
    client: 'sqlite3',
    useNullAsDefault:true,
    migrations:{
      directory:"./data/migrations"
    },
    seeds:{
      directory:"./data/seeds"
    },
    connection: {
      filename: './data/test.db3'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done)
      }
    }
  }
};
