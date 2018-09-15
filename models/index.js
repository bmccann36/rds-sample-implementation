
const Client = require('./client');
const Project = require('./project');
const Employee = require('./employee');
const Technology = require('./technology');

// PROJECT ASSOCIATION WITH CLIENTS
Project.belongsTo(Client);
Client.hasMany(Project);

//  EMPLOYEE ASSOSIATION TO PROJECT
Employee.belongsToMany(Project, {through: 'employee_project'});
Project.belongsToMany(Employee, {through: 'employee_project'});

// TECHNOLOGY ASSOCIATION TO PROJECT
Technology.belongsToMany(Project, {through: 'technology_project'})



module.exports = {
  Project,
  Client,
  Employee,
  Technology,
};
