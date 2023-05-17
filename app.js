const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const authroute = require('./routes/auth')

const app = express()
app.use(helmet())
app.use(cors())
app.options('*', cors())
app.use(express.json())
app.use('/v1', authroute)

module.exports = app
