const app = require('./app')
const config = require('./config/config')
const sequelize = require('./config/dbConnect')

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.')
}).catch((error) => {
  console.error('Unable to connect to the database: ', error)
})
app.listen(config.port, () => {
  console.log(`App is running on port ${config.port}`)
})
