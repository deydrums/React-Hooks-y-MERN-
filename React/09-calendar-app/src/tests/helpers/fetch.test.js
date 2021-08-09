import { fetchWithoutToken } from "../../helpers/fetch";

describe('Pruebas en el helper fetch', () => {

    test('Fetch sin token debe de funcionar', async() => {
        const resp = await fetchWithoutToken('auth',{email:'dagarcia100@gmail.com', password:'123456'},'POST');
        expect(resp instanceof Response).toBe(true);
        const body = await resp.json();
        expect(body.ok).toBe(true);
    });
    
    
});
