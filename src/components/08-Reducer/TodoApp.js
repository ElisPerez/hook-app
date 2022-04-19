import React, { useReducer } from 'react';
import { toDoReducer } from './toDoReducer';

import './styles.css';

const inicialState = [ {
 id: new Date().getTime(),
 desc: 'Aprender inglés',
 done: false,
}]

export const TodoApp = () => {
 const [ toDos ] = useReducer(toDoReducer, inicialState);

 console.log(toDos);
 

  return (
   <div>
    <h1>ToDo App</h1>
    <hr />

   <ul>
    <li>Tarea por realizar</li>
    <li>Tarea por realizar</li>
    <li>Tarea por realizar</li>
   </ul>
   </div>
  )
}
