

// defined a join table
const ClientProject = db.define('ClientProject')
Client.belongsToMany(Project, { through: ClientProject });
// add association 
const assWheel = await client.addProject(project

// defined relationship 
Project.belongsTo(Client)
//&& set instance
project.setClient(client)
