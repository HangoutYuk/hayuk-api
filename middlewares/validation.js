const httpStatus = require('http-status')

const validate = (schema) => (req, res, next) => {
  const {
    error
  } = schema.validate(req.body)
  if (error) {
    res.status(httpStatus.UNPROCESSABLE_ENTITY)
      .send(error.details[0].message)
  } else {
    next()
  }
}

module.exports = validate
