


const Sequelize = require('sequelize');
const db = require('../_db')

module.exports = db.define('tech', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  type: {
    type: Sequelize.STRING,
  },
})
