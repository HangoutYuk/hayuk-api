const axios = require('axios')
const httpStatus = require('http-status')
// fungsi delay
function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const testAPI = async (req, res) => {
  try {
    const locdata = req.params.location
    const fetchdata = {
      result: [],
      photos: [],
      schedule: [],
      recommendData: {},
      tempReview: {}
    }
    let placeid
    // request rekomendasi lokasi ke Model Endpoint
    await axios.get(`https://recommender-api-ghsbboa5oa-as.a.run.app/recommend/${locdata}`)
      .then(
        res => {
          fetchdata.recommendData = res.data
        })
      .catch(
        err => {
          console.log(err)
        })
    // dapatkan foto dari lokasi
    for (const i in fetchdata.recommendData.places_id) {
      placeid = Object.values(fetchdata.recommendData.places_id[i]).toString()
      await sleep(50)
      await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeid}&fields=photo%2Cname&key=AIzaSyClh1AGWGGuXQM38uvxoxwjvdRNNP3h0mo`)
        .then(
          res => {
            if (res.data.result.photos !== undefined) {
              const links = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${res.data.result.photos[0].photo_reference}&sensor=false&key=AIzaSyClh1AGWGGuXQM38uvxoxwjvdRNNP3h0mo`
              console.log(i)
              fetchdata.photos.push({ link: links })
            } else {
              fetchdata.photos.push({ link: null })
            }
          })
        .catch(
          err => {
            console.log(err)
          })
      // data detail dari lokasi
      await sleep(100)
      await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeid}&language=id&region=id&key=AIzaSyClh1AGWGGuXQM38uvxoxwjvdRNNP3h0mo`)
        .then(
          res => {
            let abOut
            const ids = res.data.result.place_id
            const placeNames = Object.values(fetchdata.recommendData.places_name[i]).toString()
            const Rating = res.data.result.rating
            const TotalReview = res.data.result.user_ratings_total
            if (res.data.result.reviews !== undefined) {
              const ReviewLength = res.data.result.reviews
              fetchdata.tempReview[`place_${[i]}`] = []
              for (const x in ReviewLength) {
                fetchdata.tempReview[`place_${[i]}`].push({ id: x, author: res.data.result.reviews[x].author_name, rating: res.data.result.reviews[x].rating, text: res.data.result.reviews[x].text, time: res.data.result.reviews[x].relative_time_description })
              }
            } else {
              fetchdata.tempReview.push(null)
            }
            const Category = res.data.result.types[0]
            if (res.data.result.current_opening_hours !== undefined) {
              const scheDule = res.data.result.current_opening_hours.weekday_text
              fetchdata.schedule.push(scheDule)
            }
            const addRess = res.data.result.formatted_address
            const lat = res.data.result.geometry.location.lat
            const lng = res.data.result.geometry.location.lng
            if (res.data.result.editorial_summary !== undefined) {
              abOut = res.data.result.editorial_summary.overview || null
            } else {
              abOut = null
            }
            const phOne = res.data.result.formatted_phone_number || null
            const phOto = fetchdata.photos[i].link
            const webSite = res.data.result.website || null
            fetchdata.result.push({ id: ids, photo: phOto, name: placeNames, category: Category, address: addRess, rating: Rating, totalReview: TotalReview, about: abOut, schedule: fetchdata.schedule[i], review: fetchdata.tempReview[`place_${[i]}`], phone: phOne, website: webSite, latitude: lat, longitude: lng })
          })
        .catch(
          err => {
            console.log(err)
          })
    }
    console.log(fetchdata.result)
    res.status(httpStatus.OK).send({
      status: 'OK',
      message: 'Daftar berhasil didapatkan',
      data: fetchdata.result
    })
  } catch (err) {
    res.status(httpStatus.BAD_REQUEST).send(err)
  }
}

module.exports = testAPI
