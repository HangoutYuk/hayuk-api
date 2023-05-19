const jwt = require('jsonwebtoken')
const httpStatus = require('http-status')
require('dotenv').config()

const verifyToken = (req, res, next) => {
  const token = req.header('auth-token')
  if (!token) return res.status(httpStatus.FORBIDDEN).send('Access Denied')

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET)
    req.user = verified
    next()
  } catch (err) {
    res.status(httpStatus.BAD_REQUEST).send('Invalid Token')
  }
}

module.exports = verifyToken
