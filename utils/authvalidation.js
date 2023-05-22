const Joi = require('joi')

const register = Joi.object().keys({
  name: Joi.string().min(3).max(255).required(),
  email: Joi.string().min(6).max(255).required().email(),
  password: Joi.string().min(6).max(1024).required()
})
const login = Joi.object().keys({
  email: Joi.string().required(),
  password: Joi.string().required()
})

const updateUser = Joi.object()
  .keys({
    name: Joi.string().min(3).max(255),
    email: Joi.string().min(6).max(255).email(),
    password: Joi.string().min(6).max(1024)
  })
  .min(1)

module.exports = { register, login, updateUser }
