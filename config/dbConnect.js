const { Sequelize } = require('sequelize')
const config = require('./config')

const sequelize = new Sequelize(
  config.db.name,
  config.db.user,
  config.db.password,
  {
    host: config.db.host,
    dialect: 'mysql',
    // dialectOptions: {
    //   socketPath: config.db.socket
    // },
    timezone: '+07:00'
  })

module.exports = sequelize
