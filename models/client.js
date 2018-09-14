
const Sequelize = require('sequelize');
const db = require('../_db')

module.exports = db.define('client', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  industry: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  currentlyBilling: {
    type: Sequelize.BOOLEAN
  },
})

