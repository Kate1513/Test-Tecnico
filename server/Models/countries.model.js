const mongoose = require('mongoose')

const countriesSchema = mongoose.Schema({
    ID_COUNTRY: Number,
    NAME: String,
})

const Countries = mongoose.model('countries', countriesSchema)

module.exports = Countries