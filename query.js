

const { Client, Project, Employee, Tech } = require('./models');

// logic().then(() => process.exit())
// deleteClient().then(() => process.exit())

findEmployeesWhere().then(() => process.exit())


// DELTING
async function logic() {
  const matt = await Employee.findById(4)
  await matt.destroy()
}

// DELETE CLIENT
async function deleteClient() {
  const acbl = await Client.findById(1);
  await acbl.destroy();
}

// finding on association
async function findEmployeesWhere() {
  return Employee.findAll({
    raw: true,
    include: [
    //   {
    //     model: Tech,
    //     where: {
    //       name: 'Angular'
    //     }
    //   },
    {
      model: Project,
      where: {
        name: 'Mariner'
      }
    }
    ]
  })
    .then(res => {
       return console.log(res)
    })
}



