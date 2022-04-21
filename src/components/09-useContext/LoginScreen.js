import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {

  const { setUser } = useContext(UserContext);
  
  const userElis = {
    id: 1234,
    name: 'Elis',
  }
  
  return (
    <div>
      <h1>Login</h1>
      <hr />
      <button
        className='btn btn-primary'
        onClick={ () => setUser(userElis)}
      >Registrar</button>
      
    </div>
  )
}
