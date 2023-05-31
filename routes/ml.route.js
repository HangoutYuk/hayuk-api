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
   *                        "longitude": 110.3804744
   *                    },
   *                    {
   *                        "id": "ChIJUf61j6xZei4R8BquRPVGu6M",
   *                        "photo": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=AZose0l77vzHXIqymAmlF79NjPPiU-ArMe3782yosckUdk9lodATL7PLyPHRVgTbQpSxU9xsSIGFEzT0c59pV_zabBLdouhGuJZ6R7rTLsyg1vYC4XL9CRYDuKY-iQLqSOGh3nSZ8uy8adIwb7g2aS3Cu9qK18iHVu_KdsV9nWZo-LTPqsix&sensor=false&key=AIzaSyClh1AGWGGuXQM38uvxoxwjvdRNNP3h0mo",
   *                        "name": "McDonald's",
   *                        "category": "restaurant",
   *                        "address": "Jl. Kaliurang No.KM. 5, Kocoran, Sinduadi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281, Indonesia",
   *                        "rating": 4.4,
   *                        "totalReview": 9570,
   *                        "about": "Franchise makanan cepat saji klasik yang telah lama berdiri, terkenal dengan burger dan kentang gorengnya.",
   *                        "review": [
   *                            {
   *                                "id": "0",
   *                                "author": "arriridhoO",
   *                                "rating": 5,
   *                                "text": "Salah satu fast food yg sdh tdk asing ditelinga, lokasi strategis, selalu ramai pengunjung, parkiran luas, mushola hanya terdapat di lantai dasar dket jalur drive thru, toilet terdapat di lantai 1 dan 2, utk lantai 1 selalu dilewati lalu lalang orang lewat, utk lantai 2 sering digunakan utk kumpul\" bersama sekedar nongkrong atau sembari nugas sambil cemal cemil",
   *                                "time": "7 bulan lalu"
   *                            },
   *                            {
   *                                "id": "1",
   *                                "author": "Dhea Adzana Putri",
   *                                "rating": 5,
   *                                "text": "Tempatnya nyaman, strategis, masih melayani dengan kasir di saat MCD lain menggunakan self serivice yang malah membuat lebih repot, mungkin karena belum terbiasa aja. Tapi tetap lebih nyaman jika dilayani.\n\nParkir nya sangat ramah, mushola aja, lantai 2 nyaman. Terimakasih",
   *                                "time": "10 bulan lalu"
   *                            },
   *                            {
   *                                "id": "2",
   *                                "author": "Asri's",
   *                                "rating": 5,
   *                                "text": "Kenapa Mcd store disini belum ada mesin self ordernya, kan biar ordernya lebih leluasa. Tetep bisa nukerin penawaran yg di aplikasi kok di kasir, terus pembayaran bisa qris dan banyak lagi ✨\nOverall nicee banget meskin cukup kecil tempatnya. Sebelahan sama tempo gelato, setiap kesini sangat tergoda sekali buat melipir ke sebelahnya 😔\nMungkin bisa segera susul kaya store mcd yg di Jombor sama Sudirman ya, ada mesin self ordernya biar lebih leluasa dan cepet sat set 🫶",
   *                                "time": "3 minggu yang lalu"
   *                            },
   *                            {
   *                                "id": "3",
   *                                "author": "suryo purnomo edi",
   *                                "rating": 5,
   *                                "text": "Salah satu restoran waralaba cepat saji di Jl. Kaliurang. Tempat strategis, sehingga banyak pengunjungnya. Di jam-jam tertentu antrian panjang sehingga kita harus bersabar. Seperti restoran cepat saji lainnya, menyediakan ayam goreng, burger, dll. Tempat makannya terdiri dari dua lantai, di lantai dua bagian balkon khusus area merokok. Tempatnya bersih, lahan parkir luas, bisa buat tempat nongkrong, layak untuk dikunjungi.",
   *                                "time": "sebulan yang lalu"
   *                            },
   *                            {
   *                                "id": "4",
   *                                "author": "Farhan Amen",
   *                                "rating": 5,
   *                                "text": "Mcd di Jalan Kaliurang! Tempat besar dengan parkir yang luas. Rasa dan harga seperti Mcd pada umumnya. Pelayanan cepat dan ramah menambah kenyamanan kamu yang sedang ingin menikmati santapan Mcd.",
   *                                "time": "4 bulan lalu"
   *                            }
   *                        ],
   *                        "phone": "0811-1786-136",
   *                        "website": "http://www.mcdonalds.co.id/",
   *                        "latitude": -7.7625093,
   *                        "longitude": 110.3796601
   *                    }
   *                 ]
   *            }
   *      '400':
   *        description: Bad Request
   */
