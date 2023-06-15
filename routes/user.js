const router = require('express').Router()
const verifytoken = require('../middlewares/verifytoken')
const validate = require('../middlewares/validation')
const schema = require('../utils/authvalidation')
const { getUser, getUserId, updateUser, deleteUser, uploadPhoto, getUserPoll, deleteUserPoll } = require('../controllers/user')

// get all user
router.get('/user', verifytoken, getUser)

// by user id
router.route('/user/:id')
  .post(verifytoken, uploadPhoto)
  .get(verifytoken, getUserId)
  .patch(verifytoken, validate(schema.updateUser), updateUser)
  .delete(verifytoken, deleteUser)

// get user user created polls
router.route('/user/:id/polls')
  .get(verifytoken, getUserPoll)
  .delete(verifytoken, deleteUserPoll)

module.exports = router
