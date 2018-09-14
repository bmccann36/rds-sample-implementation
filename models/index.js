const db = require('../_db')
const Client = require('./client');
const Project = require('./project');
const Sequelize = require('sequelize')
// Project.belongsTo(Client)
// Client.hasMany(Project)
const ClientProject = db.define('ClientProject')

Client.belongsToMany(Project, { through: ClientProject });


module.exports = {
  Project,
  Client,
  ClientProject
};
