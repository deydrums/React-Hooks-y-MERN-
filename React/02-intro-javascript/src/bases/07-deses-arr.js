const personajes = ['Goku' , 'Vegeta' , 'Trunks'];

const [ , , p1] = personajes;
console.log(p1);

const retornaArreglo = () => {
    return['ABC', 123];
}


const [letras,numeros] = retornaArreglo();
console.log(letras,numeros);

//Tarea
// 1. el primer valor del arr se llamara nombre
// 2. se llamara setNombre
const useState = (valor) => {
    return [valor, () =>{console.log('Hola Mundo')}];
}

const [nombre, setNombre] = useState('Goku');

console.log(nombre);
setNombre();