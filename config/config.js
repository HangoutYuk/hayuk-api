require('dotenv').config()
const config = {
  port: process.env.PORT || 8080,
  db: {
    name: process.env.DB_NAME,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    socket: process.env.INSTANCE_UNIX_SOCKET
  },
  apiKey: process.env.MAPS_API_KEY,
  mainServer: process.env.MAIN_SERVER,
  devServer: process.env.DEV_SERVER,
  localServer: process.env.LOCAL_SERVER,
  recAPI: process.env.RECOMMENDER_API,
  mlEndpointServer: process.env.ML_SERVER,
  bucket: process.env.PROFILE_BUCKET
}

module.exports = config
