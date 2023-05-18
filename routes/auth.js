const route = require('express').Router()
const validate = require('../middlewares/validation')
const schema = require('../utils/authvalidation')
// const Joi = require('joi')
const { register, login, getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/auth')

route.post('/register', validate(schema.register), register)
route.post('/login', validate(schema.login), login)
route.get('/users', getUsers) // GET all users
route.get('/users/:id', getUser) // GET a specific user based on ID
route.post('/users', validate(schema.createUser), createUser)
route.put('/users/:id', validate(schema.updateUser), updateUser)
route.delete('/users/:id', validate(schema.deleteUser), deleteUser)

module.exports = route
