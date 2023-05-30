const router = require('express').Router()
const verifytoken = require('../middlewares/verifytoken')
const endpoints = require('../controllers/ml.endpoint')

router.get('/ml-endpoint/:location', verifytoken, endpoints)

module.exports = router

// API DOCS
/**
   * @swagger
   * /ml-endpoint/{location}:
   *  get:
   *    security:
   *      - AuthToken: []
   *    tags:
   *      - ML Model Endpoint
   *    summary: ML Model untuk mendapat rekomendasi top 10 lokasi
   *    parameters:
   *      - in: path
   *        name: location
   *        required: true
   *        schema:
   *          type: string
   *        description: masukan lokasi denagn format latitude,longitude
   *    responses:
   *      '200':
   *        description: Success
   *        content:
   *          application/json:
   *            example:
   *              {
   *                "status": "success",
   *                "message": 'Daftar berhasil didapatkan',
   *                "data": {
   *                   "place_0": [
   *                       {
   *                           "place_name": "Sate Taichan F2",
   *                           "address": "69QH+CQ7, Gg. Dandang Gulo, Pogung Kidul, Sinduadi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55284, Indonesia",
   *                           "about": null,
   *                           "phone": "0853-4114-7875",
   *                           "photo": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=AZose0m8KtK0w4TUG1eJ5znG8lyQOirH0jnmJ2ODgomYhgzszaz7SH59OuAY-c4iPbTgSwD0usVjefBGdELnn2FzA6mWBo8081RqJ9No7qvoUsS9aSP0brP8VjVT9jMdrC-0QTnYWtNFouxuWFJEohi8Prg1TUsGzPSMq9gEw4DhqXh0mj-4&sensor=false&key=AIzaSyClh1AGWGGuXQM38uvxoxwjvdRNNP3h0mo",
   *                           "website": "http://www.instagram.com/sate_taichanf2/"
   *                       }
   *                    ],
   *                    "place_1": [
   *                        {
   *                           "place_name": "Blackbone Coffee",
   *                           "address": "Jl. Kaliurang Km. 5, Gg. Siti Sonya No.88, Kocoran, Sinduadi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281, Indonesia",
   *                           "about": null,
   *                           "phone": null,
   *                           "photo": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=AZose0mfIuGCS_Dcw5GPbJ4CzXZwTmpW894-PHe_dSS0M6PzXR5CLeJRtA0V_HpsqfXnE4B7w9e5MCX4ZT0VpcOXLlKA6lWOKJy-cujO5HJrUf-pACshfbf67YRfpDSFCsL5L-1leoOM8w7fjpAzCek30EP-KqJaB1vulEaJh09jQa7kOVIB&sensor=false&key=AIzaSyClh1AGWGGuXQM38uvxoxwjvdRNNP3h0mo",
   *                           "website": null
   *                        }
   *                      ]
   *                    }
   *                  }
   *      '400':
   *        description: Bad Request
   */
