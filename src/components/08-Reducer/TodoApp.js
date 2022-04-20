import React, { useEffect, useReducer } from 'react';
import { toDoReducer } from './toDoReducer';

import './styles.css';
import { ToDoList } from './ToDoList';
import { ToDoAdd } from './ToDoAdd';
 

const init = () => {
  return JSON.parse(localStorage.getItem('toDos')) || [];
}

export const TodoApp = () => {
  const [ toDos, dispatch ] = useReducer(toDoReducer, [], init);
  
  

  useEffect(() => {
    localStorage.setItem('toDos', JSON.stringify(toDos));
    
  }, [ toDos ]);
  
  const handleDelete = (todoId) => {
    // create action
    const action = {
      type: 'delete',
      payload: todoId,
    }

    // dispatch
    dispatch(action);
  }

  const handleToggle = (todoId) => {
    // No es necesario crear una const llamada "action", simplemente se envía el objeto mediante el dispatch y el toDoReducer.js lo recibirá como el action.
    dispatch({
      type: 'toggle',
      payload: todoId,
    })
  }

  const handleAddToDo = (newToDo) => {
    dispatch({
      type: 'add',
      payload: newToDo,
    });
 }
 

  return (
   <div>
    <h1 className='text-center'>ToDo App</h1>
    <hr />

   <div className="row">
     <div className="col-7">
      <h4 className='text-center'>To-Do List ( { toDos.length } )</h4>
      <hr />
          <ToDoList
            toDos={toDos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
     </div>
     <div className="col-5">
          <ToDoAdd
            handleAddToDo={handleAddToDo}
      />
     </div>
   </div>
   </div>
  )
}
