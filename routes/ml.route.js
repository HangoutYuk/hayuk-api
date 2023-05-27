const router = require('express').Router()
const verifytoken = require('../middlewares/verifytoken')
const endpoints = require('../controllers/ml.endpoint')

router.get('/ml-endpoint', verifytoken, endpoints)

module.exports = router
