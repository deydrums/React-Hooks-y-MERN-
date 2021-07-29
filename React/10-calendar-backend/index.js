const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
//Ejecutar express
var app = express();

//DDBB
dbConnection();

//Directorio publico
app.use(express.static('public'));

//Lectura y parseo del body
app.use(express.json());

//Rutas
//Reescribir rutas
app.use('/api/auth', require('./routes/auth'));

//TODO: CRUD: Eventos

//Escuchar peticiones
app.listen(process.env.PORT,()=>{
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
});