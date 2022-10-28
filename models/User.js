// require mongoose ODM
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  favs: {
    type: String
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('User', UserSchema)