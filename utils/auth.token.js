const jwt = require('jsonwebtoken')

// eslint-disable-next-line no-undef
const signtoken = ({ id, email, username }) => {
  return jwt.sign({ id, email, username }, process.env.TOKEN_SECRET, { expiresIn: '8h' })
}

module.exports = signtoken
