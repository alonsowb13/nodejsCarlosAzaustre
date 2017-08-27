'use strict' //esto es para utilizar los nuevos tipos de variables y el uso de ECMA6

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const port = process.env.PORT || 3001

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())//poder aceptar peticiones en formato json
const mongoose = require('mongoose')

//mostrar un mensaje con un ruta del elemento
/*app.get('/hola', (req, res)=>{
    res.send({message: 'Hola Mundo'});
})*/
//pasar parametros por el la url
/*app.get('/hola/:name', (req, res)=>{
    res.send({message: `Hola ${req.params.name}`});
})*/

//User JSON formatter en la chrome store

app.get('/api/product', (req, res) => {
    res.send(200, {products: []})
})

app.get('/api/product/:productId', (req, res)=>{

})

app.post('/api/product', (req, res)=>{

    console.log(req.body)
    res.status(404).send({message: 'El producto no existe'})
})

app.put('/api/product/:productId', (req, res)=>{

})

app.delete('/api/product/:productId', (req, res)=>{

})

mongoose.connect('mongodb://localhost:27017/shop', (err, res)=>{
    if(err){
        return console.log(`Error al conectar a la BD: ${err}`);
    }
    console.log('Conexion a la BD establecida...')
    app.listen(port, ()=>{
        console.log(`API REST corriendo en localhost:${port}`)
     })
})

/*app.listen(port, ()=>{
   console.log(`API REST corriendo en localhost:${port}`)
})*/

//bodyparser parsea la peticion que se hace atraves del protocolo http es un middleware
//nodemon se instala para usar un livereload en el server y se crea en el dev dependencies de package json