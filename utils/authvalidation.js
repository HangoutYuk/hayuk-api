const Joi = require('joi')

const register = Joi.object().keys({
  name: Joi.string().min(6).max(255).required(),
  username: Joi.string().min(6).max(255).required(),
  email: Joi.string().min(6).max(255).required().email(),
  password: Joi.string().min(8).max(1024).required()
})
const login = Joi.object().keys({
  username: Joi.string().required(),
  password: Joi.string().required()
})
module.exports = { register, login }
