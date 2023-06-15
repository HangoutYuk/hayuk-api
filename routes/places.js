const router = require('express').Router()
const verifytoken = require('../middlewares/verifytoken')
const { allPlaces, placesDetails } = require('../controllers/places')

router.get('/places/:location', verifytoken, allPlaces)
router.get('/places/details/:placeId', verifytoken, placesDetails)

module.exports = router

// API DOCS
/**
   * @swagger
   * /places/{location}:
   *  get:
   *    security:
   *      - AuthToken: []
   *    tags:
   *      - Data Tempat
   *    summary: Mendapatkan data top 10 tempat dari ML endpoint dengan masukan lokasi pengguna
   *    parameters:
   *      - in: path
   *        name: location
   *        required: true
   *        schema:
   *          type: string
   *        description: masukan lokasi dengann format latitude,longitude
   *        default: -7.761028,110.378478
   *    responses:
   *      '200':
   *        description: Success
   *        content:
   *          application/json:
   *            example:
   *              {
   *                "status": "success",
   *                "message": 'Daftar berhasil didapatkan',
   *                "data": [
   *                    {
   *                        "id": "ChIJ16Xs67JZei4RpgV1otKBiO4",
   *                        "photo": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=AZose0l6PTFlYOkxb67QiMSTWeLA9lXG2y_gUQZ0Ye8uzeXX5Hj_cFry_C2UAcixuaS7IzNy6wlk5-JBxOApynVJPYRATqavxJSvEiMM1cEBdku3tWDEaR-CDSqXE3KTzQbWGWK8e3jCjsqQEHlmAe6Sx5TELMlD8OQQEWGSnjZmpoawscuJ&sensor=false&key=AIzaSyClh1AGWGGuXQM38uvxoxwjvdRNNP3h0mo",
   *                        "name": "Gudeg Yu Narni Pusat Mbarek",
   *                        "category": "restaurant",
   *                        "rating": 4.5,
   *                        "totalReview": 373,
   *                        "latitude": -7.765867200000001,
   *                        "longitude": 110.3804744
   *                    }
   *                 ]
   *            }
   *      '400':
   *        description: Bad Request
   */

/**
   * @swagger
   * /places/details/{placeId}:
   *  get:
   *    security:
   *      - AuthToken: []
   *    tags:
   *      - Data Tempat
   *    summary: Data detail dari suatu tempat berdasarkan dengan masukan path parameter place id
   *    parameters:
   *      - in: path
   *        name: placeId
   *        required: true
   *        schema:
   *          type: string
   *        description: masukan place id
   *        default: ChIJCYpAP2DmaC4RshB4KjZqULA
   *    responses:
   *      '200':
   *        description: Success
   *        content:
   *          application/json:
   *            example:
   *              {
   *                "status": "success",
   *                "message": "Detail tempat berhasil didapatkan",
   *                "data": [
   *                    {
   *                        "id": "ChIJ16Xs67JZei4RpgV1otKBiO4",
   *                        "photo": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=AZose0l6PTFlYOkxb67QiMSTWeLA9lXG2y_gUQZ0Ye8uzeXX5Hj_cFry_C2UAcixuaS7IzNy6wlk5-JBxOApynVJPYRATqavxJSvEiMM1cEBdku3tWDEaR-CDSqXE3KTzQbWGWK8e3jCjsqQEHlmAe6Sx5TELMlD8OQQEWGSnjZmpoawscuJ&sensor=false&key=AIzaSyClh1AGWGGuXQM38uvxoxwjvdRNNP3h0mo",
   *                        "name": "Gudeg Yu Narni Pusat Mbarek",
   *                        "category": "restaurant",
   *                        "address": "Gg. Cokrowolo, Kocoran, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281, Indonesia",
   *                        "rating": 4.5,
   *                        "totalReview": 373,
   *                        "about": null,
   *                        "review": [
   *                            {
   *                                "id": "0",
   *                                "author": "Mutia Tiara",
   *                                "rating": 5,
   *                                "text": "Deket banget sama lokasi penginapan, makan siang di sini emm sedap! Tidak kemanisan, pedesnya anget anget banget, enak!\n\nBisa beli untuk oleh-oleh juga lo! Enak asli",
   *                                "time": "9 bulan lalu"
   *                            },
   *                            {
   *                                "id": "1",
   *                                "author": "Rifki Kurniawan",
   *                                "rating": 5,
   *                                "text": "Menurut saya ini Gudeg yg enak dan pas di lidah sunda saya. Apalagi kreceknya, harga pun terjangkau dibanding gudeg lainnya.",
   *                                "time": "3 bulan lalu"
   *                            },
   *                            {
   *                                "id": "2",
   *                                "author": "Blogger Kuliner",
   *                                "rating": 3,
   *                                "text": "Krecek keras, gudeg areh terlalu manis.. order tepong (paha atas) juga ayam terlalu keras dan hambar. Pertama nyoba dan terakhir.",
   *                                "time": "2 minggu yang lalu"
   *                            },
   *                            {
   *                                "id": "3",
   *                                "author": "Kumvid Niken",
   *                                "rating": 4,
   *                                "text": "Warung rmh bersih semebelnya,menurut saya: rasa gudegnya konsisten pas manisnya pas kematangannya(ga kering ga nyemek) ini semua yg sy suka dari gudeg Yu Narni, tehrasa pas juga manisnya👍🏻👍🏻👍🏻✅❤",
   *                                "time": "dalam minggu terakhir"
   *                            },
   *                            {
   *                                "id": "4",
   *                                "author": "Rini Panggabean",
   *                                "rating": 5,
   *                                "text": "So far buat aku ini resto Gudeg paling enak krn gak terlalu manis tapi bumbu ya meresap banget ke ayam. Uenak tenan.  Harga 1 porsi lengkap 39 k kalo gak salah. Standarlah.",
   *                                "time": "3 tahun lalu"
   *                            }
   *                        ],
   *                        "phone": "0878-3870-3999",
   *                        "website": null,
   *                        "latitude": -7.765867200000001,
   *                        "longitude": 110.3804744,
   *                        "mapsURL": "https://www.google.com/maps/search/?api=1&query=-7.765867200000001%2C110.3804744&query_place_id=ChIJua4VyY_maC4RNovv6zj97e0"
   *                    }
   *                 ]
   *            }
   *      '400':
   *        description: Bad Request
   */
