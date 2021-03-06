import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './Counter.css'

export const CounterWithCustomHook = () => {
 
 const { state, increment, decrement, reset } = useCounter(100);

  return (
   <>
    <h1>Counter with custom hook: { state }</h1>
    <button onClick={ () => decrement(2) } className='btn'>
     -1
    </button>
    <button onClick={ reset } className='btn'>
     reset
    </button>
    <button onClick={ () => increment(2) } className='btn'>
     +1
    </button>
   </>
  )
}
