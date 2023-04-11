const mongoose = require('mongoose')

const countriesSchema = mongoose.Schema({
    ID_COUNTRY: Number,
    NAME: String,
    STATES: [{
      ID_STATE: Number,
      NAME: String,
      ID_COUNTRY: Number,
      CITIES: [{
        ID_CITY: Number,
        NAME: String,
        ID_STATE: Number,
        POPULATION: Number
      }]
    }]
})

const Countries = mongoose.model('countries', countriesSchema)

module.exports = Countries