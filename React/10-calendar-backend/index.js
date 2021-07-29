const express = require('express');
require('dotenv').config();
//Ejecutar express
var app = express();

//Directorio publico
app.use(express.static('public'));

//Rutas
//Reescribir rutas
app.use('/api/auth', require('./routes/auth'));

//TODO: CRUD: Eventos

//Escuchar peticiones
app.listen(process.env.PORT,()=>{
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
});