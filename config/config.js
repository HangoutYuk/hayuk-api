require('dotenv').config()
const config = {
  port: process.env.PORT || 8080,
  db: {
    name: process.env.DB_NAME,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  }
}

module.exports = config
