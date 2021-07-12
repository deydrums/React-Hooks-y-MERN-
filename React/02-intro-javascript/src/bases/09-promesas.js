import { getHeroeById } from "./bases/08-imp-exp";


// const promesa = new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         //Tarea 
//         //Importar
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//         //reject('No se pudo encontrar el heroe');
//         //resolve();
//     },2000)

// });


// promesa.then((heroe)=>{
//     console.log('heroe', heroe)
// })
// .catch(err=>console.warn(err));

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            //Tarea 
            //Importar
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe)
            }
            else{
                reject('No se pudo encontrar el heroe');
            }
            //resolve();
        },2000)
    
    });
}

getHeroeByIdAsync(3)
.then(console.log)
.catch(console.warn);