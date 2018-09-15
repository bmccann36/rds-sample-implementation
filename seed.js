const { Client, Project, Employee, Tech } = require('./models');
const clientsData = require('./seedData/clients');
const employeesData = require('./seedData/employees');
const techData = require('./seedData/technologies')
const db = require('./_db');


seedData()
  .then(_ => console.log('SEED SUCCESSFUL'))
  .catch((err) => {
    console.error(err)
  })
  .finally(_ => {
    db.close()
  })

async function seedData() {

  await db.sync({ force: true });

  await seedEmployees();
  await seedClients();
  await seedTechnologies();
  await associateEmployees();

}

PORT_COST_MANAGER = 1
MARINER = 2
EMAIL_AUTOMATION = 3
CLAIMS_DASHBOARD = 4
ALEXA_SMARTHOME = 5
HOME_ENERGY_GRID = 6
ALEXA_HELPER = 7
RATES_ENGINE = 8


function seedClients() {
  const pendingClientWrites = clientsData.map(clientData => {
    return Client.create(clientData, { include: [Project] })
  });
  return Promise.all(pendingClientWrites)
}
function seedEmployees() {
  const pendingProjectWrites = employeesData.map(employeeData => {
    Employee.create(employeeData)
  });
  return Promise.all(pendingProjectWrites)
}
function seedTechnologies() {
  const pendingTechs = techData.map(tech => {
    Tech.create(tech)
  })
  return Promise.all(pendingTechs)
}

async function associateEmployees() {
  const sam = await Employee.findOne({ where: { name: 'Sam Glass' } })
  const chris = await Employee.findOne({ where: { name: 'Chris Brause' } })
  const jeanne = await Employee.findOne({ where: { name: 'Jeanne Castillo' } })
  const matt = await Employee.findOne({ where: { name: 'Matt Johnson' } })
  const steve = await Employee.findOne({ where: { name: 'Steve Kuo' } })
  const moh = await Employee.findOne({ where: { name: 'Mohamed Maher' } })
  const josh = await Employee.findOne({ where: { name: 'Josh Sohn' } })
  const associations = [
    sam.addProjects([1, 2]),
    chris.addProject(5),
    jeanne.addProjects([3, 4]),
    matt.addProjects([1, 2, 5, 6]),
    steve.addProjects(2, 8),
    moh.addProject(4),
    josh.addProjects([6, 7]),
    sam.addTeches([1, 2, 4, 6]),
    jeanne.addTeches([2, 3, 6]),
    matt.addTeches([1, 2, 4, 5, 6]),
    steve.addTeches([1, 2, 4, 6]),
    moh.addTeches([2, 4, 5, 6]),
    josh.addTeches([1, 6]),
  ]
  return Promise.all(associations);
}




SAM_GLASS = 1
CHRIS_BRAUSE = 2
JEANNE_CASTILLO = 3
MATT_JOHNSON = 4
STEVE_KUO = 5
MOHAMMED_MAHER = 6
JOSH_SOHN = 7
