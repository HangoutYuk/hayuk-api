const router = require('express').Router()
const verifytoken = require('../middlewares/verifytoken')
const pollCreate = require('../controllers/poll')

router.post('/poll/create', verifytoken, pollCreate)

module.exports = router

// POLL ENDPOINT DOCUMENTATION
/**
 * @swagger
 * /poll/create:
 *   post:
 *     tags:
 *       - Poll Website
 *     summary: membuat website polling
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/poll'
 *     responses:
 *       '201':
 *         description: Created
 *         content:
 *           application/json:
 *             example:
 *               {
 *                 "status": "success",
 *                 "message": "Polling berhasil dibuat!",
 *                 "data": "https://poll-dot-hayuk-project.et.r.appspot.com/poll/${poll_id}"
 *               }
 *       '400':
 *         description: Bad Request
*/