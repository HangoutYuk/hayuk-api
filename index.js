const app = require('./app')
const config = require('./config/config')
app.listen(config.port, () => {
  console.log(`App is running on port ${config.port}`)
})
