

// defined a join table
const ClientProject = db.define('ClientProject')
Client.belongsToMany(Project, { through: ClientProject });
// add association
const assWheel = await client.addProject(project

// defined relationship
Project.belongsTo(Client)
//&& set instance
project.setClient(client)



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
