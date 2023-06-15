const router = require('express').Router()
const verifytoken = require('../middlewares/verifytoken')
const pollCreate = require('../controllers/poll')

router.post('/poll/create', verifytoken, pollCreate)

module.exports = router
