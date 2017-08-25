'use strict' //esto es para utilizar los nuevos tipos de variables y el uso de ECMA6

const express = require('express')

const app = express()

app.listen(3000, ()=>{
    console.log("API REST corriendo en localhost:3000")
})