const { Client, Project, ClientProject } = require('./models')
const ClientsData = require('./seedData/clients')
const ProjectsData = require('./seedData/projects')

seedData()

async function seedData() {
  await syncTables()
  await seedClients()
  await seedProjects()
  const project = await Project.findOne({
    where: { name: 'WheelHouse' }
  })
  const client = await Client.findOne({
    where: { name: 'ACBL' }
  })

  const assWheel = await client.addProject(project)
  // client.addProject(project)
  // console.log(assWheel)

}


function seedClients() {
  const pendingClientWrites = ClientsData.map(clientData => Client.create(clientData))
  return Promise.all(pendingClientWrites)
}
function seedProjects() {
  const pendingProjectWrites = ProjectsData.map(projectData => Project.create(projectData))
  return Promise.all(pendingProjectWrites)
}

function syncTables() {
  return Client.sync({ force: true })
    .then(() => {
      return Project.sync({ force: true })
    })
    .then(() => {
      return ClientProject.sync({ force: true })
    })
}


