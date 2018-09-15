

const { Client, Project, Employee, Tech } = require('./models');



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


