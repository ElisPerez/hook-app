import React from 'react'


// Small seria entonces un llamado a la funcion React.memo() la cual renderiza un componente si cambia el estado de sus propiedades (props)
export const Small = React.memo(({ value }) => {
 console.log('me volví a llamar :(');
  return (
    <small>{value}</small>
  )
})
