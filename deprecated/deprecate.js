

const Sequelize = require('sequelize');

var db = new Sequelize('postgres://localhost:5432/rds-test', {
  logging: false
});

/*RELATIONSHIPS
 PROJECT
 project belongs to client
 project has many technologies

 EMPLOYEE
has many coworkers 
has many technologies
belongs to one or many projects
has one job title
*/

var Client = db.define('client', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  industry: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  currentlyBilling: {
    type: Sequelize.BOOLEAN
  },
})

var Project = db.define('project', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unieque: true,
  },
  startDate: {
    type: Sequelize.DATE
  },
  endDate: {
    type: Sequelize.DATE
  }
})

// User.hasMany(Story, {
//   foreignKey: 'author_id',
//   onDelete: 'cascade', // remove all associated stories
//   hooks: true // makes the cascade actually work. Yay Sequelize!
// });
// Story.belongsTo(User, {as: 'author'});


Project.belongsTo(Client)
Client.hasMany(Project)

const client = {
  name: 'ACBL',
  industry: 'Commercial Shipping',
  currentlyBilling: true,
}
const project = {
  name: 'Mariner',
  startDate: '2018-01-08 00:00:00'
}


Client.sync({ force: true })
  .then(() => {
    Project.sync({ force: true })
  })
  .then(() => {
    return Client.create(client)
  })
  .then((createdClient) => {
    return Project.create(project)
      .then((createdProject) => {
        createdProject.setClient(createdClient)
      })
  })



// /wiki
// router.post('/', function (req, res, next) {
//   // console.log('reqBody', req.body)
//   User.findOrCreate({
//     where: {
//       name: req.body.name,
//       email: req.body.email
//     }
//   })
//     .spread(function (user, createdPageBool) {
//       console.log(chalk.magenta('USER found or created'))
//       return Page.create(req.body)
//         .then(function (page) {
//           return page.setAuthor(user);
//         });
//     })
//     .then(function (page) {
//       res.json(page)
//       // res.redirect(page.route);
//     })
//     .catch(next);
// });
