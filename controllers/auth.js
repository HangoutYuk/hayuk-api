const nanoid = require('nanoid')
const httpStatus = require('http-status')
const User = require('../models/models')
const bcrypt = require('bcrypt')
const token = require('../utils/auth.token')
// controller register
const register = async (req, res) => {
  User.sync().then(() => {
    console.log('Synchronized sucessfully!')
  }).catch((error) => {
    console.error('Unable to synchronize!', error)
  })
  // cek apakah email dan username sudah terpakai
  const checkEmail = await User.findOne({ where: { email: req.body.email } })
  if (checkEmail) return res.status(httpStatus.CONFLICT).send('Email sudah dipakai!')
  //
  const checkUsername = await User.findOne({ where: { username: req.body.username } })
  if (checkUsername) return res.status(httpStatus.CONFLICT).send('Username sudah dipakai!')
  // hash password
  const hashPassword = await bcrypt.hash(req.body.password, 10)
  // buat data pengguna
  const user = {
    id: nanoid.nanoid(),
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: hashPassword,
    createdAt: Date.now()
  }
  // input ke database
  User.create(user).then(() => {
    res.status(httpStatus.CREATED).send({
      status: 'success',
      message: 'User berhasil ditambahkan'
    })
  }).catch((err) => {
    res.status(httpStatus.BAD_REQUEST).send(err)
  })
}
// controller login
const login = async (req, res) => {
  const user = await User.findOne({ where: { username: req.body.username } })
  if (!user || !user.email) return res.status(httpStatus.CONFLICT).send('Username atau email salah!')
  // cek pass
  const checkPass = bcrypt.compare(req.body.password, user.password)
  if (!checkPass) return res.status(httpStatus.CONFLICT).send('Username atau password salah!')
  const authtoken = token(user)
  user.token = authtoken
  res.header('auth-token', authtoken).status(httpStatus.OK).send({
    status: 'success',
    message: 'Login berhasil',
    token: user.token
  })
}
module.exports = { register, login }
