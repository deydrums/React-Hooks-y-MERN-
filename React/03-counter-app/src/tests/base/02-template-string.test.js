import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";


describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe de retornar Hola David', () => {
        const nombre = 'David';
        const saludo = getSaludo(nombre);
        console.log(saludo);
        expect( saludo ).toBe('Hola ' + nombre);
    })

    //getSaludo debe de retornar Hola Carlos sin o hay argumento nombre
    test('getSaludo debe de retornar Hola Carlos', () => {
        const saludo = getSaludo();
        console.log(saludo);
        expect( saludo ).toBe('Hola Carlos');
    })
    
})
