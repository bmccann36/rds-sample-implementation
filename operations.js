const { Client, Project, Employee, Technology } = require('./models');
const ClientsData = require('./seedData/clients');
const ProjectsData = require('./seedData/projects');
const db = require('./_db');

seedData()

async function seedData() {
  await db.sync({ force: true });

  const acblData = {
    name: 'ACBL',
    industry: 'Commercial Shipping',
    currentlyBilling: true,
    projects: [{
      name: 'Mariner',
      startDate: '2018-01-08 00:00:00',
    },
    {
      name: 'Port Cost Manager',
      startDate: '2018-01-08 00:00:00',
    },
    ],
  };

  // const createdClient = await Client.create(acblData, {
  //   include: [Project]
  // });

  const projectData = {
    name: 'Rates Engine',
    startDate: '2018-01-08 00:00:00',
  };

  const hertzData = {
    name: 'Hertz',
    industry: 'Rental Car',
    currentlyBilling: true,
    projects: [
      projectData,
    ]
  }

  const createdClient = await Client.create(hertzData, {
    include: [Project]
  });

  const foundProject = await Project.findAll({
    where: { name: 'Rates Engine' }
  })
  // console.log(foundProject)
  const brian = await Employee.create({ name: 'Brian'})
  brian.addProject(foundProject);
  // console.log(foundProject)

  const tech = await Technology.create({
    name: 'typescript',
    type: 'programming language'
  })

  tech.addProject(foundProject);

}



function seedClients() {
  const pendingClientWrites = ClientsData.map(clientData => Client.create(clientData))
  return Promise.all(pendingClientWrites)
}
function seedProjects() {
  const pendingProjectWrites = ProjectsData.map(projectData => Project.create(projectData))
  return Promise.all(pendingProjectWrites)
}



