module.exports = {
  "development": {
    "username": "postgres",
    "password": "@Lavezzi2",
    "database": "hellobooksdb_dev",
    "host": "127.0.0.1",
    "port": 5432,
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": "@Lavezzi2",
    "database": "hellobooksdb_test",
    "host": "127.0.0.1",
    "port": 5432,
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": "@Lavezzi2",
    "database": "hellobooksdb_production",
    "host": "127.0.0.1",
    "port": 5432,
    "dialect": "postgres",
    "use_env_variable": process.env.DATABASE_URL
  }
}
