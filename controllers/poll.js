const axios = require('axios')
const httpStatus = require('http-status')
const { poll_list_table } = require('../models/models')
const { nanoid } = require('nanoid')
const pollCreate = async (req, res) => {
  try {
    const placeId = req.body.placeId
    const userId = req.body.userId
    const placesData = {}
    await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&language=id&region=id&key=${process.env.MAPS_API_KEY}`)
      .then(
        res => {
          const rawCategory = res.data.result.types[0]
          const cate = rawCategory.split('_')
          const Category = cate.map(word => {
            return word[0].toUpperCase() + word.substring(1)
          }).join(' ')
          const Rating = res.data.result.rating
          const TotalReview = res.data.result.user_ratings_total
          const placeNames = res.data.result.name
          let abOut
          if (res.data.result.editorial_summary !== undefined) {
            abOut = res.data.result.editorial_summary.overview || null
          } else {
            abOut = null
          }
          let links
          if (res.data.result.photos !== undefined) {
            links = `https://maps.googleapis.com/maps/api/place/photo?maxheight=480&photoreference=${res.data.result.photos[0].photo_reference}&sensor=false&key=${process.env.MAPS_API_KEY}`
          } else {
            links = null
          }
          // get Maps Places URL
          const lat = res.data.result.geometry.location.lat
          const lng = res.data.result.geometry.location.lng
          const coord = encodeURIComponent(`${lat},${lng}`)
          const placeURL = `https://www.google.com/maps/search/?api=1&query=${coord}&query_place_id=${placeId}`
          placesData.name = placeNames
          placesData.category = Category
          placesData.rating = Rating
          placesData.totalReview = TotalReview
          placesData.url = placeURL
          placesData.link = links
          placesData.about = abOut
        }
      )
      .catch(
        err => {
          console.error(err)
        }
      )
    poll_list = {
      poll_id: nanoid(20),
      photo_url: placesData.link,
      place_name: placesData.name,
      place_about: placesData.about,
      place_category: placesData.category,
      place_rating: placesData.rating,
      place_total_review: placesData.totalReview,
      maps_url: placesData.url,
      createdAt: Date.now(),
      user_id: userId
    }
    await poll_list_table.create(poll_list).then(() => {
      res.status(httpStatus.CREATED).send({
        status: 'success',
        message: 'Polling berhasil dibuat!',
        data: `https://poll-dot-hayuk-project.et.r.appspot.com/poll/${poll_list.poll_id}`
      })
    }).catch(error => {
      res.status(httpStatus.BAD_REQUEST).send(error)
    })
  } catch (err) {
    res.status(httpStatus.BAD_REQUEST).send(err)
  }
}

module.exports = pollCreate
