
const Client = require('./client');
const Project = require('./project');
const Employee = require('./employee');
const Tech = require('./tech');

// PROJECT ASSOCIATION WITH CLIENTS
Project.belongsTo(Client);
Client.hasMany(Project);

//  EMPLOYEE ASSOSIATION TO PROJECT
Employee.belongsToMany(Project, { through: 'employee_project' });
Project.belongsToMany(Employee, { through: 'employee_project' });

// TECHNOLOGY ASSOCIATION TO EMPLOYEE
Tech.belongsToMany(Employee, { through: 'technology_employee' })
Employee.belongsToMany(Tech, { through: 'technology_employee' })

module.exports = {
  Project,
  Client,
  Employee,
  Tech,
};
