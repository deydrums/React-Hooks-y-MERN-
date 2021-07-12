//Desestructuracion
//Asignacion Desestructurante

const persona = {
    nombre : 'Tony',
    edad: 45,
    clave: 'Ironman'
};

// const {nombre, edad, clave} = persona;

// console.log(nombre); 
// console.log(edad); 
// console.log(clave); 

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

const useContext = ({nombre, edad, clave, rango = 'Capitan'})  => {
    //console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng:{ 
            lat: 15.4654,
            lng: -12.1121
        }
    }
}

const {nombreClave, anios, latlng:{lat, lng}} = useContext(persona);
// const {nombreClave, anios} = avenger;

console.log(nombreClave, anios);
console.log(lat, lng);
// console.log(avenger);