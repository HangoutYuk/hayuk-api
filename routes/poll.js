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
 *     security:
 *       - AuthToken: []
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


/**
 * @swagger
 * /recommend/{loc_user}:
 *    get:
 *     tags:
 *       - Recommender Endpoint
 *     summary: Mendapatkan rekomendasi tempat berdasarkan lokasi pengguna
 *     parameters:
 *       - in: path
 *         name: loc_user
 *         required: true
 *         schema:
 *           type: string
 *         description: Koordinat lokasi user
 *         example: -7.761028,110.378478
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             example:
 *               {
 *                 "status": "success",
 *                 "message": "Daftar user berhasil didapatkan",
 *                 "data": {
 *                   "id": "qyO9_BgMqNpb45Y3g1S-o",
 *                   "name": "Ahmad Ibrahim",
 *                   "email": "a.ibrahim@example.com",
 *                   "createdAt": "2023-03-17T11:04:09.588Z",
 *                   "updatedAt": "2023-03-17T11:04:09.588Z"
 *                 }
 *               }
 *       '400':
 *         description: Bad Request
 */

/**
 * @swagger
 * /recommend_speed/{loc_user}:
 *    get:
 *     tags:
 *       - Recommender Endpoint
 *     summary: Mendapatkan rekomendasi dengan lebih cepat tempat berdasarkan lokasi pengguna
 *     parameters:
 *       - in: path
 *         name: loc_user
 *         required: true
 *         schema:
 *           type: string
 *         description: Koordinat lokasi user
 *         example: -7.761028,110.378478
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             example:
 *               {
 *                 "status": "success",
 *                 "message": "Daftar user berhasil didapatkan",
 *                 "data": {
 *                   "id": "qyO9_BgMqNpb45Y3g1S-o",
 *                   "name": "Ahmad Ibrahim",
 *                   "email": "a.ibrahim@example.com",
 *                   "createdAt": "2023-03-17T11:04:09.588Z",
 *                   "updatedAt": "2023-03-17T11:04:09.588Z"
 *                 }
 *               }
 *       '400':
 *         description: Bad Request
*/