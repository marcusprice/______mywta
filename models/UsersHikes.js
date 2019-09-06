const db = require('./db')
const Sequelize = require('sequelize')
const User = require('./User')
const Hike = require('./Hike')

const UsersHikes = db.define('usershikes', {
  userId: {
    type: Sequlize.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },

  hikeId: {
    type: Sequlize.INTEGER,
    references: {
      model: Hike,
      key: 'id'
    }
  }
}, {
  freezeTableName: true,
})

module.exports = UsersHikes
