const mongoose = require('mongoose')

const ProfileSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
})


const ProfileModel = mongoose.model('register', ProfileSchema)

module.exports = ProfileModel