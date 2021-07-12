const persona = {
    nombre:  'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        zip: 564546,
        lat: 14.3664,
        lng: 34.3466
    }
};



const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);