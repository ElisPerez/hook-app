import React, { useState } from 'react'

export const Entendiendo = () => {

  console.log(useState('soy el valor inicial del primer argumento'));
  const [ estado, cambiarEstado ] = useState('soy el valor inicial del primer argumento');

  const manejarEstado = (e) => {
    cambiarEstado(estado + 1)
  }
  return (
    <>
    <div>Entendiendo useState</div>
      <h2>Contador: { estado }</h2>
      <button onClick={manejarEstado}>+1</button>

    </>
  )
}