const httpStatus = require('http-status')
const User = require('../models/models')
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
    console.log('error upload')
    res.status(httpStatus.BAD_REQUEST).send(err)
  }
}
module.exports = { getUserId, getUser, updateUser, deleteUser, uploadPhoto }
