const mongoose = require('mongoose')

const citiesSchema = mongoose.Schema({
    ID_CITY: Number,
    NAME: String,
    ID_STATE: Number,
    POPULATION: Number,
})

const Cities = mongoose.model('cities', citiesSchema)

module.exports = Cities