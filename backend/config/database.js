const config = require('./index');

const db = config.db;
const username = db.username;
const password = db.password;
const database = db.database;
const host = db.host;

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: 'postgres',
    seederStorage: 'sequelize',
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    seederStorage: 'sequelize',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};



/*
This will allow you to load the database configuration environment variables from the .env file into the config/index.js.

Notice how the production database configuration has different keys than the development configuration? When you deploy 
your application to production, your database will be read from a URL path instead of a username, password, and database 
name combination.
*/