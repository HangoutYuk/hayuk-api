const { Sequelize } = require('sequelize')
const config = require('./config')

const sequelize = new Sequelize(
  config.db.name,
  config.db.user,
  config.db.password,
  {
    // host: config.db.host,
    dialect: 'mysql',
    dialectOptions: {
      socketPath: process.env.INSTANCE_UNIX_SOCKET
    }
  })

module.exports = sequelize
