const route = require('express').Router()
const verifytoken = require('../middlewares/verifytoken')
const { getUser, getUserId, updateUser, deleteUser } = require('../controllers/user')

route.get('/user', verifytoken, getUser)
route.get('/user/:id', verifytoken, getUserId)
route.put('/user/:id', verifytoken, updateUser)
route.delete('/user/:id', verifytoken, deleteUser)

module.exports = route
