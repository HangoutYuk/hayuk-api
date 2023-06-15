const router = require('express').Router()
const verifytoken = require('../middlewares/verifytoken')
const { allPlaces, placesDetails } = require('../controllers/places')

router.get('/places/:location', verifytoken, allPlaces)
router.get('/places/details/:placeId', verifytoken, placesDetails)

module.exports = router
