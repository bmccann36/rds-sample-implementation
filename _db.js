const Sequelize = require('sequelize');

var db = new Sequelize('postgres://localhost:5432/rds-test', {
  logging: false
});

module.exports = db;
