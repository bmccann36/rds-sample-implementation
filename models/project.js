const Sequelize = require('sequelize');
const db = require('../_db')

module.exports = db.define('project', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  startDate: {
    type: Sequelize.DATE
  },
  endDate: {
    type: Sequelize.DATE
  }
})

