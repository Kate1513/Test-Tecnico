const express = require('express')
const mongoose = require('mongoose')
const Countries = require('./Models/countries.model.js')

//API
const app = express()

//BD conection
mongoose 
.connect('mongodb+srv://katerineipuzl:katerineipuzl@testerco.jkcxnya.mongodb.net/test')
.then(() =>console.log('Conectada a Mflix'))

app.get('/country')

app.get('/api/details/:id_country', (req, res) => {
    const { user_id } = req.params

    Grades
    .findById(user_id)
    .then(user => res.send(user))
})

const port = 5005
app.listen(port, () => console.log('servidor levantado'))