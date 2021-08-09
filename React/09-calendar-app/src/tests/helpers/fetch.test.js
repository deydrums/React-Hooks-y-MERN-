import { fetchWithoutToken, fetchWithToken } from "../../helpers/fetch";

describe('Pruebas en el helper fetch', () => {

    let token = '';

    test('Fetch sin token debe de funcionar', async() => {
        const resp = await fetchWithoutToken('auth',{email:'dagarcia100@gmail.com', password:'123456'},'POST');
        expect(resp instanceof Response).toBe(true);
        const body = await resp.json();
        expect(body.ok).toBe(true);
        token = body.token;
    });

    
    test('Fetch con token debe de funcionar', async() => {
        localStorage.setItem('token',token);
        const resp = await fetchWithToken('events/61118641354e2f2878a4ca26',{},'DELETE');
        const body = await resp.json();
        expect(body.msg).toBe('El evento no existe');
    });
    
});
