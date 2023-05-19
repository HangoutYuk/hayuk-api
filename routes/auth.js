const route = require('express').Router()
const validate = require('../middlewares/validation')
const schema = require('../utils/authvalidation')
// const Joi = require('joi')
const { register, login } = require('../controllers/auth')

route.post('/register', validate(schema.register), register)
route.post('/login', validate(schema.login), login)

module.exports = route
