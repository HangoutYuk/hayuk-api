const httpStatus = require('http-status')
const User = require('../models/models')
const bcrypt = require('bcrypt')
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
const updateUser = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } })
    if (!user) return res.status(httpStatus.NOT_FOUND).send('Pengguna tidak ditemukan')
    const hashPassword = await bcrypt.hash(req.body.password, 10)
    await user.update(
      {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: hashPassword
      },
      {
        where: { id: req.params.id }
      }
    )

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
module.exports = { getUserId, getUser, updateUser, deleteUser }
