
const Client = require('./client');
const Project = require('./project');
const Employee = require('./employee');


// PROJECT ASSOCIATION WITH CLIENTS
Project.belongsTo(Client);
Client.hasMany(Project);


Employee.belongsToMany(Project, {through: 'employee_project'});
Project.belongsToMany(Employee, {through: 'employee_project'});



module.exports = {
  Project,
  Client,
  Employee,
};
