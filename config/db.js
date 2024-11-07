require('dotenv').config(); // Make sure dotenv is loaded

const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  username: process.env.leo,
  password: process.env.Recreated,
  database: process.env.localhost,
  host: process.env.DB_HOST || 'localhost',  // Fallback to localhost
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  
  module.exports = sequelize;  // Exporting sequelize instance