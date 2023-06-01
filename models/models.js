const DataTypes = require('sequelize')
const sequelize = require('../config/dbConnect')

const User = sequelize.define('User', {
  id: {
    type: DataTypes.STRING,
    unique: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  photo_url: {
    type: DataTypes.STRING,
    allowNull: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  }
})

module.exports = User
