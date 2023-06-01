const multer = require('multer')

const multermiddleware = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5242880 // 5 mb maximum
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      cb(new Error('Hanya menerima format png dan jpg/jpeg!'), false)
    } else {
      cb(null, true)
    }
  }

})

module.exports = multermiddleware
