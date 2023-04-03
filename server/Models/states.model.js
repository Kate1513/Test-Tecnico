const mongoose = require('mongoose')

const statesSchema = mongoose.Schema({
    ID_STATE: Number,
    NAME: String,
    ID_COUNTRY: Number,
})

const States = mongoose.model('states', statesSchema)

module.exports = States