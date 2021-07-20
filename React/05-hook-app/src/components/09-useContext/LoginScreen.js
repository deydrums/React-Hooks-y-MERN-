import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {
    /**1.Obtener la referencia al userContext
     * 2.setUser
     * {
     *  id:123,
     *  name: David
     * }
     * **/

     const {setUser} = useContext(UserContext);
     
    return (
        <div>
            <h1>LoginScreen</h1>
            <hr></hr>
            <button
                className="btn btn-success"
                onClick={()=>setUser({
                    id: 123,
                    name: 'David',
                    email: 'dagarcia100@gmail.com'
                })}
            >
                Login
            </button>
        </div>
    )
}
