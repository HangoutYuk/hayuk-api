const httpStatus = require('http-status')
const { User, poll_list_table } = require('../models/models')
const bcrypt = require('bcrypt')
const stream = require('stream')
const { Storage } = require('@google-cloud/storage')
const storage = new Storage({ projectId: 'curious-furnace-381420' })
// list semua user
const getUser = async (req, res) => {
  try {
    const users = await User.findAll()
    res.status(httpStatus.OK).send({
      status: 'success',
      message: 'Daftar user berhasil didapatkan',
      data: users
    })
  } catch (err) {
    res.status(httpStatus.BAD_REQUEST).send(err)
  }
}

// berdasarkan ID
const getUserId = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } })
    if (!user) return res.status(httpStatus.NOT_FOUND).send('Pengguna tidak ditemukan')
    res.status(httpStatus.OK).send({
      status: 'success',
      message: 'Data pengguna berhasil didapat',
      data: user
    })
  } catch (err) {
    res.status(httpStatus.BAD_REQUEST).send(err)
  }
}

// perbarui data pengguna
User.findOne()
const updateUser = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } })
    if (!user) return res.status(httpStatus.NOT_FOUND).send('Pengguna tidak ditemukan')
    if (req.body.email && (await User.findOne({ where: { email: req.body.email } }))) {
      return res.status(httpStatus.BAD_REQUEST).send('Email sudah digunakan')
    }
    await user.update(
      {
        email: req.body.email
      },
      {
        where: { id: req.params.id }
      }
    )
    if (req.body.name) {
      await user.update(
        {
          name: req.body.name
        },
        {
          where: { id: req.params.id }
        }
      )
    }
    if (req.body.password) {
      const hashPassword = await bcrypt.hash(req.body.password, 10)
      await user.update(
        {
          password: hashPassword
        },
        {
          where: { id: req.params.id }
        }
      )
    }
    res.status(httpStatus.OK).send({
      status: 'success',
      message: 'Data pengguna berhasil diperbarui'
    })
  } catch (err) {
    res.status(httpStatus.BAD_REQUEST).send('Data pengguna gagal diperbarui')
  }
}

// hapus pengguna
const deleteUser = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } })
    if (!user) return res.status(httpStatus.NOT_FOUND).send('Data pengguna tidak ditemukan')
    await User.destroy({ where: { id: req.params.id } })
    res.status(httpStatus.OK).send({
      status: 'success',
      message: 'Data pengguna berhasil dihapus'
    })
  } catch (err) {
    console.error(err)
    res.status(httpStatus.BAD_REQUEST).send(err)
  }
}

const deleteUserPoll = async (req, res) => {
  try {
    const pollList = await poll_list_table.findOne({ where: { user_id: req.params.id, poll_id: req.body.pollId } })
    if (!pollList) return res.status(httpStatus.NOT_FOUND).send('Tidak ada data polling')
    await poll_list_table.destroy({ where: { user_id: req.params.id, poll_id: req.body.pollId } })
    res.status(httpStatus.OK).send({
      status: 'success',
      message: 'Polling berhasil dihapus'
    })
  } catch (err) {
    console.error(err)
    res.status(httpStatus.BAD_REQUEST).send(err)
  }
}
const getUserPoll = async (req, res) => {
  try {
    const poll_listing = []
    const pollList = await poll_list_table.findAll({ where: { user_id: req.params.id } })
    if (!pollList) return res.status(httpStatus.NOT_FOUND).send('Tidak ada daftar polling')
    pollList.forEach( (item) => {
      if (item.poll_id) {
        poll_listing.push({ poll_id: item.poll_id, photo_url: item.photo_url, place_name: item.place_name, place_rating: item.place_rating, place_total_review: item.place_total_review })
      }
    }) 
    res.status(httpStatus.OK).send({
      status: 'success',
      message: 'Data tempat favorit berhasil didapatkan',
      data: poll_listing
    })
  } catch (err) {
    console.error(err)
    res.status(httpStatus.BAD_REQUEST).send(err)
  }
}

// upload photo profile
const uploadPhoto = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } })
    if (!user) return res.status(httpStatus.NOT_FOUND).send('Pengguna tidak ditemukan')
    if (!req.file) return res.status(httpStatus.NOT_FOUND).send('Upload file terlebih dahulu!')
    const photoFile = req.file
    const bufferStream = new stream.PassThrough()
    bufferStream.end(Buffer.from(photoFile.buffer))
    const id = req.params.id
    const originalName = photoFile.originalname
    const fileExtension = originalName.split('.').pop()
    const fileName = `${id}-${new Date().toISOString()}-current.${fileExtension}`
    // upload to GCS
    const bucketName = process.env.PROFILE_BUCKET
    const bucket = storage.bucket(bucketName)
    const file = bucket.file(`${id}/${fileName}`)
    bufferStream.pipe(file.createWriteStream({ resumable: false, public: true }))
    const fileURL = bucket.file(`${id}/${fileName}`).publicUrl()
    // update user photo URL di database
    await user.update(
      {
        photo_url: fileURL
      },
      {
        where: { id: req.params.id }
      }
    )
    res.status(httpStatus.OK).send({
      status: 'success',
      message: 'Foto profil berhasil ditambahkan!',
      data: {
        photoURL: fileURL
      }
    })
  } catch (err) {
    console.erorr('error upload')
    res.status(httpStatus.BAD_REQUEST).send(err)
  }
}
module.exports = { getUserId, getUser, updateUser, deleteUser, uploadPhoto, getUserPoll, deleteUserPoll }
