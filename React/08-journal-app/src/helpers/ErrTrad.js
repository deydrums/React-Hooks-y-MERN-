export const ErrTrad = (code) =>{
    switch (code) {
        case 'auth/user-not-found':
            return 'No se encontraron usuarios con el correo indicado.';
        case 'auth/wrong-password':
            return 'La contraseña es incorrecta.'
        case 'auth/email-already-in-use':
            return 'El usuario ya está en uso'
        default:
        return code;
    }
};