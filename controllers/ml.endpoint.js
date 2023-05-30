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
      // eslint-disable-next-line no-array-constructor
      result: {},
      // eslint-disable-next-line no-array-constructor
      photos: new Array(),
      recommendData: {}
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
      await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeid}&language=id&key=AIzaSyClh1AGWGGuXQM38uvxoxwjvdRNNP3h0mo`)
        .then(
          res => {
            let abOut
            const place = Object.values(fetchdata.recommendData.places_name[i]).toString()
            const placeNames = place
            const addRess = res.data.result.formatted_address
            if (res.data.result.editorial_summary !== undefined) {
              abOut = res.data.result.editorial_summary.overview || null
            } else {
              abOut = null
            }
            const phOne = res.data.result.formatted_phone_number || null
            const phOto = fetchdata.photos[i].link
            const webSite = res.data.result.website || null
            fetchdata.result[`place_${[i]}`] = [{ place_name: placeNames, address: addRess, about: abOut, phone: phOne, photo: phOto, website: webSite }]
            // fetchdata.result.push(placeNames, address, about, phone, photo, website)
            // console.log(fetchdata.result)
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
