var mongoose = require('mongoose')
module.exports = mongoose.model('Vote', new mongoose.Schema({key: String,counter: Number}))