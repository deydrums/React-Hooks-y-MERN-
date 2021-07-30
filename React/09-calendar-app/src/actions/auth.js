import { fetchWithoutToken } from "../helpers/fetch"
import { types } from "../types/types";
import Swal from 'sweetalert2';



export const startLogin = (email, password) => {
    return async(dispatch) => {
        const resp = await fetchWithoutToken('auth',{email,password},'POST');
        const body = await resp.json();
        console.log(body);
        if(resp.ok) {
            localStorage.setItem('token',body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(login({
                uid: body.uid,
                name: body.name
            }));
        }else{
            Swal.fire('Error',body.message?body.message:'Ha ocurrido un error','error');
        }
    }
}

export const startRegister = (name, email, password) => {
    return async(dispatch) => {
        const resp = await fetchWithoutToken('auth/new',{name,email,password},'POST');
        const body = await resp.json();
        console.log(body);
        if(resp.ok) {
            localStorage.setItem('token',body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(login({
                uid: body.uid,
                name: body.name
            }));
        }else{
            Swal.fire('Error',body.message?body.message:'Ha ocurrido un error','error');
        }
    }
}

const login = (user) => ({
    type: types.authLogin,
    payload: user
});