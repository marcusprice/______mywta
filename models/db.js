const Sequelize = require('sequelize')
const credentials = require('../config/credentials')

const sequelize = new Sequelize({
  dialect: 'postgres',
  database: credentials.db,
  username: credentials.username,
  password: credentials.password,
  port: credentials.port,
  host: credentials.host
})

User.sync({force: false})
  .then(() => {
    User.create({
      firstName: 'Odin',
      lastName: 'Sloan',
      age: 6
    })
  })
  .catch(err =>{
    console.error(err)
  })
