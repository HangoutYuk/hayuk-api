const router = require('express').Router()
const verifytoken = require('../middlewares/verifytoken')
const validate = require('../middlewares/validation')
const schema = require('../utils/authvalidation')
const { getUser, getUserId, updateUser, deleteUser, uploadPhoto, getUserPoll } = require('../controllers/user')

// get all user
router.get('/user', verifytoken, getUser)

// by user id
router.route('/user/:id')
  .post(verifytoken, uploadPhoto)
  .get(verifytoken, getUserId)
  .patch(verifytoken, validate(schema.updateUser), updateUser)
  .delete(verifytoken, deleteUser)

// get user favorite places

// get user user created polls
router.get('/user/:id/polls', verifytoken, getUserPoll)
/**
   * @swagger
   * /user:
   *  get:
   *    security:
   *      - AuthToken: []
   *    tags:
   *      - Manajemen Pengguna
   *    summary: Daftar akun pengguna
   *    responses:
   *      '200':
   *        description: Success
   *        content:
   *          application/json:
   *            example:
   *              {
   *                "status": "success",
   *                "message": "Daftar user berhasil didapatkan",
   *                "data": {
   *                  "id": "qyO9_BgMqNpb45Y3g1S-o",
   *                  "name": "Ahmad Ibrahim",
   *                  "email": "a.ibrahim@example.com",
   *                  "createdAt": "2023-03-17T11:04:09.588Z",
   *                  "updatedAt": "2023-03-17T11:04:09.588Z"
   *                }
   *              }
   *      '400':
   *        description: Bad Request
   */

/**
 * @swagger
 * /user/{id}:
 *    get:
 *      security:
 *        - AuthToken: []
 *      tags:
 *        - Manajemen Pengguna
 *      summary: Melihat detail pengguna berdasarkan ID
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: string
 *          description: ID dari user
 *      responses:
 *        '200':
 *          description: Success
 *          content:
 *            application/json:
 *              example:
 *                {
 *                  "status": "success",
 *                  "message": "Data pengguna berhasil didapatkan",
 *                  "data": {
 *                    "id": "qyO9_BgMqNpb45Y3g1S-o",
 *                    "name": "Ahmad Ibrahim",
 *                    "email": "a.ibrahim@example.com",
 *                    "createdAt": "2023-03-17T11:04:09.588Z",
 *                    "updatedAt": 2023-03-17T11:04:09.588Z"
 *                  }
 *                }
 *        '404':
 *          description: User not found
 */

/**
 * @swagger
 * /user/{id}:
 *   patch:
 *     security:
 *       - AuthToken: []
 *     tags:
 *       - Manajemen Pengguna
 *     summary: Memperbarui detail pengguna berdasarkan ID
 *     description: Bisa memperbaharui salah satu data saja atau ketiga data sekaligus, data akan tetap divalidasi ada minimum panjang nama, email dan password, serta pengecekan apakah email sudah digunakan user lain atau belum
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/register'
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID dari pengguna
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             example:
 *               {
 *                 "status": "success",
 *                 "message": "Data pengguna berhasil diupdate",
 *               }
 *       '404':
 *         description: User not found
 */

/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     security:
 *       - AuthToken: []
 *     tags:
 *       - Manajemen Pengguna
 *     summary: Menghapus User berdasarkan ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID dari user
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             example:
 *               {
 *                 "success": "success",
 *                 "message": "User berhasil dihapus"
 *               }
 *       '404':
 *         description: User not found
 */

/**
 * @swagger
 * /user/{id}:
 *    post:
 *      security:
 *        - AuthToken: []
 *      tags:
 *        - Manajemen Pengguna
 *      summary: Upload foto profil pengguna ke google cloud storage (png/jpg) dan ukuran tidak lebih dari 5 MB, respon yang didapat adalah link dari foto profil pengguna
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: string
 *          description: ID dari user
 *      requestBody:
 *        required: true
 *        content:
 *          multipart/form-data:
 *            schema:
 *              $ref: '#/components/schemas/uploadProfile'
 *      responses:
 *        '200':
 *          description: Success
 *          content:
 *            application/json:
 *              example:
 *                {
 *                  "status": "success",
 *                  "message": 'Data tempat favorit berhasil didapatkan',
 *                  "data": {
 *                    "photoURL": "https://storage.googleapis.com/hayuk-storage-profile-photo/CAwo3o1RuwWJrM4eK3lVt%2FCAwo3o1RuwWJrM4eK3lVt-2023-06-01T11%3A21%3A47.342Z-current.jpg"
 *                  }
 *                }
 *        '404':
 *          description: User not found
 */

/**
   * @swagger
   * /user/{id}/polls:
   *  get:
   *    security:
   *      - AuthToken: []
   *    tags:
   *      - Manajemen Pengguna
   *    summary: Daftar polling yang dibuat pengguna
   *    parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *         description: ID dari user
   *    responses:
   *      '200':
   *        description: Success
   *        content:
   *          application/json:
   *            example:
   *              {
   *                "status": "success",
   *                "message": "Daftar favorit pengguna berhasil didapatkan",
   *                "data": [
   *                    {
                            "poll_id": "ArNXCeVrNe4880pmfanO",
                            "photo_url": "https://maps.googleapis.com/maps/api/place/photo?maxheight=480&photoreference=AZose0lnvxUdwxm26Op4zKijrcDe9-EAUmBnsKBcYw-2GKRZHZj9QvqHNsZjaREF_6bUNzBHMp4t_w39JkoTSJi39yjJtuyHImrFD3EVcdG4q3EAWBjbfdvG0msDLG0tqdvm-Qr6mjzHi5M7aL64feLiWINlviP1MrwbB7FOBjHVGD7BYujW&sensor=false&key=AIzaSyClh1AGWGGuXQM38uvxoxwjvdRNNP3h0mo",
                            "place_name": "Starbucks Coffee Empire XXI",
                            "place_rating": "4.6",
                            "place_total_review": "1280"
                        },
                        {
                            "poll_id": "ExqryD-W1qRmNg4MPtxI",
                            "photo_url": "https://maps.googleapis.com/maps/api/place/photo?maxheight=480&photoreference=AZose0k-BOfpwHuRsMNO4x48wJTQ1I_TmZyay08VWwW6u5zsC-Z48NvKKRlRyVFQ5xg9p177Ikm2LoXIJocKj9idhRNS6Caxy1M1ytJovtbtnCXPGipk4c-SieJpmfcIy94xQPwoNZPYbx27AM3zpa6AdKsT9VBZ-DZzbcXaDVRW3L0T3ge1&sensor=false&key=AIzaSyClh1AGWGGuXQM38uvxoxwjvdRNNP3h0mo",
                            "place_name": "Bliss Pool and Lounge",
                            "place_rating": "4.6",
                            "place_total_review": "1318"
                        }
   *                ]
   *              }
   *      '400':
   *        description: Bad Request
   */

module.exports = router
