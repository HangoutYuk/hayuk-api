const { Sequelize } = require('sequelize')
const config = require('./config')

const sequelize = new Sequelize(
  config.db.name,
  config.db.user,
  config.db.password,
  {
    // uncomment host if you want to run in it local, for best practice use socket path when deploying to cloud
    // host: config.db.host,
    dialect: 'mysql',
    dialectOptions: {
       socketPath: config.db.socket
    },
    timezone: '+07:00'
  })

module.exports = sequelize
