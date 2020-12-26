const Sequelize = require('sequelize');

const connection = new Sequelize('guiapress', 'root', 'docker', {
  host: 'localhost',
  dialect: 'mysql',
  timezone: '-03:00',
  insecureAuth: true,
});

module.exports = connection;
