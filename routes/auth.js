const router = require('express').Router()
const validate = require('../middlewares/validation')
const schema = require('../utils/authvalidation')
const { register, login } = require('../controllers/auth')

router.post('/register', validate(schema.register), register)
router.post('/login', validate(schema.login), login)

module.exports = router
