import React from 'react';

export const ShowIncrement = React.memo(({ increment }) => {

 console.log('Me volví a generar desde ShowIncrement');
  return (
   <button
    className='btn btn-primary'
    onClick={ () => {
     increment(2);
    }}
   >Incrementar</button>
  )
})
