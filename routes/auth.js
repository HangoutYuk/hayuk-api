const route = require('express').Router()
const validate = require('../middlewares/validation')
const schema = require('../utils/authvalidation')
// const Joi = require('joi')
const { register, login, getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/auth')

route.post('/register', validate(schema.register), register)
route.post('/login', validate(schema.login), login)
route.get('/users', getUsers)
route.get('/users/:id', getUser)

module.exports = route
