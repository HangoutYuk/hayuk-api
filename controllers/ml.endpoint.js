const axios = require('axios')
const httpStatus = require('http-status')
const data2 = {
  places_id: [
    { 0: 'ChIJx9SnEUtYei4RcwITP4p9v2s' },
    { 1: 'ChIJGU7_SmtZei4RIAHKkMftamg' },
    { 2: 'ChIJg4jEb81Zei4RlmGn_QJ5pJI' },
    { 3: 'ChIJ-dlUxrRZei4RyKpKHQQReFA' },
    { 4: 'ChIJcWPbYTBYei4R5__kiNVcX6Y' },
    { 5: 'ChIJvz5KezVYei4RPZs_bSRXSDM' },
    { 6: 'ChIJLcS267RZei4Rt3gPPRb4Dmg' },
    { 7: 'ChIJgVBtmuNZei4RVBK1bExNjRk' },
    { 8: 'ChIJZbFCAgjsaS4RI1fVSJU_LyI' },
    { 9: 'ChIJ_-vjaQ7saS4Ru-VDX3UIvpQ' }],
  places_name: [
    { 0: 'Waroeng Spesial Sambal "SS" 01 Perjuangan' },
    { 1: 'Lapangan Pancasila UGM' },
    { 2: 'Metro Kampus UGM' },
    { 3: 'EB Café' },
    { 4: 'Madam Tan Indonesian Food' },
    { 5: 'Boulevard UGM' },
    { 6: 'Taman BI UGM' },
    { 7: 'Air Mancur IRJ RSUP Dr. Sardjito' },
    { 8: 'A&W Restoran - Depok Town Square' },
    { 9: 'Imperial Kitchen & Dimsum' }
  ]
}

function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const testAPI = async (req, res) => {
  try {
    // axios.post(`https://example.run/model/${locdata}`)
    //   .then(
    //     res => {
    //       recdata = res.data
    //     })
    //   .catch(
    //     err => {
    //       console.log(err)
    //     })
    let placeid
    const fetchdata = {
      // eslint-disable-next-line no-array-constructor
      result: {},
      // eslint-disable-next-line no-array-constructor
      photos: new Array()
    }
    // dapatkan foto dari lokasi
    for (const i in data2.places_id) {
      placeid = Object.values(data2.places_id[i]).toString()
      await sleep(100)
      await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeid}&fields=photo%2Cname&key=AIzaSyClh1AGWGGuXQM38uvxoxwjvdRNNP3h0mo`)
        .then(
          res => {
            console.log(i)
            console.log(res.data.result.photos[i].photo_reference)
            const links = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${res.data.result.photos[i].photo_reference}&sensor=false&key=AIzaSyClh1AGWGGuXQM38uvxoxwjvdRNNP3h0mo`
            fetchdata.photos.push({ link: links })
            console.log(fetchdata.photos[i].link)
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
            const place = Object.values(data2.places_name[i]).toString()
            const placeNames = place
            const addRess = res.data.result.formatted_address
            if (res.data.result.editorial_summary !== undefined) {
              abOut = res.data.result.editorial_summary.overview || null
            } else {
              abOut = null
            }
            const phOne = res.data.result.formatted_phone_number || null
            const phOto = fetchdata.photos[i].link || null
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
