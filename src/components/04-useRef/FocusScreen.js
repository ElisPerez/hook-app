import React, { useRef } from 'react';
import '../02-useEffect/effects.css'

export const FocusScreen = () => {
 const inputRef = useRef();

 const handleClick = () => {
  inputRef.current.select();
 }

 return (
   <>
   <h1>FocusScreen</h1>
   <hr />
   <input
    className='form-control'
    ref={ inputRef }
    placeholder='Tu nombre'
   />
   <button
    onClick={ handleClick }
    className='btn btn-outline-primary mt-5'>Focus</button>
   </>
  )
}