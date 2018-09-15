

const { Client, Project, Employee, Tech } = require('./models');

logic().then(() => process.exit())

// DELTING
async function logic() {
  const matt = await Employee.findById(4)
  await matt.destroy()
}



Employee.findAll({
  raw: true,
  include: [
    {
      model: Tech,
      where: {
        name: 'Angular'
      }
    },
    {
      model: Project,
      where: {
        name: 'Mariner'
      }
    }
  ]
}
)
  .then(res => {
    console.log(res)
  })


