const express = require('express');

//Ejecutar express
var app = express();

//Rutas
app.get('/', (req,res)=>{
    res.json({
        ok: true,
    })
});

//Escuchar peticiones
app.listen(80,()=>{
    console.log(`Servicor corriendo en puerto ${4000}`)
});