const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose')
const Countries = require('./Models/countries.model.js')
require('dotenv').config()

//API
const app = express()

//Cors
app.use(cors())

//BD conection
const uri = process.env.URI_MONGO

mongoose
.connect(uri)
.then(() =>console.log('Conectada a Population'))

//End points

app.get('/api/countries/', (req, res) => {
    Countries
    .find()
    .then(countries => res.json(countries))
})

app.get('/api/countries/:id_country', (req, res) => {
    const { id_country } = req.params
    Countries
    .findOne({'ID_COUNTRY': id_country})
    .then(country => res.json(country))
})

app.get('/api/state/:id_state', (req, res) => {
    const { id_state } = req.params
    Countries
    .findOne({ 'STATES.ID_STATE': id_state })
    //Acceder al array de STATES y filtra el objeto por el ID que coincide con la busqueda.
    .then(doc => res.json(doc.STATES.filter(state => state.ID_STATE === Number(id_state)))) 
})
app.get('/api/city/:id_city', (req, res) => {
    const { id_city } = req.params
    Countries
    .findOne({ 'STATES.CITIES.ID_CITY': id_city })
    .then(doc => doc.STATES)
    .then(states => states.map(state => state.CITIES.filter(city => city.ID_CITY === Number(id_city))))
    .then(city => city.flat()[0])
    .then(result => res.json(result))
})

const port = 5007
app.listen(port, () => console.log(`servidor levantado http://localhost:${port}`))