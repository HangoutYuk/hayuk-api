const router = require('express').Router()
const validate = require('../middlewares/validation')
const schema = require('../utils/authvalidation')
const { register, login } = require('../controllers/auth')

router.post('/register', validate(schema.register), register)
router.post('/login', validate(schema.login), login)

// AUTH ENDPOINT DOCUMENTATION
/**
 * @swagger
 * /register:
 *   post:
 *     tags:
 *       - Autentikasi
 *     summary: Buat dan daftar akun baru
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/register'
 *     responses:
 *       '201':
 *         description: Created
 *         content:
 *           application/json:
 *             example:
 *               {
 *                 "status": "success",
 *                 "message":'Data pengguna baru berhasil ditambahkan',
 *                 "data": {
 *                   "id": "qyO9_BgMqNpb45Y3g1S-o",
 *                   "name": "Ahmad Ibrahim",
 *                   "email": "a.ibrahim@example.com",
 *                   "createdAt": "2023-03-17T11:04:09.588Z",
 *                   "updatedAt": 2023-03-17T11:04:09.588Z"
 *                 }
 *               }
 *       '400':
 *         description: Bad Request
 *       '409':
 *         description: Conflict
 *         content:
 *           application/json:
 *             examples:
 *               emailExist:
 *                 value:
 *                   {
 *                     message: "Email sudah dipakai!"
 *                   }
*/

/**
 * @swagger
 * /login:
 *   post:
 *     tags:
 *       - Autentikasi
 *     summary: Login akun yang telah terdaftar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/login'
 *     responses:
 *       '201':
 *         description: Created
 *         content:
 *           application/json:
 *             example:
 *               {
 *                 "status": "success",
 *                 "message":"Login berhasil",
 *                 "data": {
 *                   "id": "qyO9_BgMqNpb45Y3g1S-o",
 *                   "name": "Ahmad Ibrahim",
 *                   "email": "a.ibrahim@example.com",
 *                   "token": "token akan muncul disini"
 *                 }
 *               }
*/

module.exports = router
