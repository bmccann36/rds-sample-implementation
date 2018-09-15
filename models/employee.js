

const Sequelize = require('sequelize');
const db = require('../_db');

module.exports = db.define('employee', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

