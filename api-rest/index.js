'use strict' //esto es para utilizar los nuevos tipos de variables y el uso de ECMA6

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const port = process.env.PORT || 3001

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())//poder aceptar peticiones en formato json

app.get('/hola/:name', (req, res)=>{
    res.send({message: `Hola ${req.params.name}`})
})

app.listen(port, ()=>{
   console.log(`API REST corriendo en localhost:${port}`)
})

//bodyparser parsea la peticion que se hace atraves del protocolo http es un middleware
//nodemon se instala para usar un livereload en el server y se crea en el dev dependencies de package json