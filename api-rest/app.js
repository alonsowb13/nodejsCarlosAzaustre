'use strict' //esto es para utilizar los nuevos tipos de variables y el uso de ECMA6

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const api = require('./routes')
const productCtrl = require('./controllers/product')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())//poder aceptar peticiones en formato json
app.use('/api', api)

module.exports = app