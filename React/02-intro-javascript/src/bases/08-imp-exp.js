//import {heroes} from '../src/data/heroes';
import  heroes from '../data/heroes'

//import heroes, { owners } from "../data/heroes";

// const getHeroeById = (id) => {
//     return heroes.find((heroe)=>{
//         if(heroe.id === id){
//             return true;
//         }else{
//             return false;
//         }
//     });
// }

export const getHeroeById = (id) => heroes.find((heroe)=> heroe.id === id);
//console.log(getHeroeById(1));

//console.log('______________________');

export const getHeroesByOwner = (owner) => heroes.filter((heroe)=> heroe.owner === owner);
//console.log(getHeroesByOwner('DC'));

//console.log(owners);