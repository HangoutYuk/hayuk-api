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

const poll_list_table = sequelize.define('poll_list_table', {
  poll_id: {
    type: DataTypes.STRING,
    unique: true,
    primaryKey: true,
    allowNull: false
  },
  photo_url: {
    type: DataTypes.STRING(400),
    allowNull: false
  },
  place_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  place_about: {
    type: DataTypes.STRING,
    allowNull: true
  },
  place_category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  place_rating: {
    type: DataTypes.STRING,
    allowNull: false
  },
  place_total_review: {
    type: DataTypes.STRING,
    allowNull: false
  },
  maps_url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  }
})

poll_list_table.belongsTo(User, {
  foreignKey: 'user_id',
  targetKey: 'id'
})


module.exports = { User, poll_list_table }
