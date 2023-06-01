require('dotenv').config()
const config = {
  port: process.env.PORT || 8080,
  db: {
    name: process.env.DB_NAME,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    socket: process.env.INSTANCE_UNIX_SOCKET
  }
}

module.exports = config
