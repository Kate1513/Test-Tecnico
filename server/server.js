const express = require('express')
const mongoose = require('mongoose')
const Countries = require('./Models/countries.model.js')
const States = require('./Models/states.model.js')
const Cities = require('./Models/cities.model.js')

//API
const app = express()

//BD conection
mongoose 
.connect('mongodb+srv://katerineipuzl:katerineipuzl@testerco.jkcxnya.mongodb.net/cities_population')
.then(() =>console.log('Conectada a cities_population'))

// Countries
// .find()
// .then(country => console.log(country))

//End points

app.get('/api/countries/', (req, res) => {
    Countries
    .find()
    .then(countries => res.json(countries))
})

app.get('/api/states/', (req, res) => {
    States
    .find()
    .then(states => res.json(states))
})

app.get('/api/cities/', (req, res) => {
    Cities
    .find()
    .then(cities => res.json(cities))
})


app.get('/api/countries/:id_country', (req, res) => {
    const { id_country } = req.params
    Countries
    .findOne({'ID_COUNTRY': id_country})
    .then(country => res.json(country))
})

app.get('/api/states/:id_state', (req, res) => {
    const { id_state } = req.params
    States
    .findOne({'ID_STATE': id_state})
    .then(state => res.json(state))
})

app.get('/api/cities/:id_citie', (req, res) => {
    const { id_citie} = req.params
    Cities
    .findOne({'ID_CITY': id_citie})
    .then(city => res.json(city))
})

const port = 5007
app.listen(port, () => console.log('servidor levantado'))