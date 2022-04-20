import React, { useEffect, useReducer } from 'react';
import { toDoReducer } from './toDoReducer';

import './styles.css';
import { useForm } from '../../hooks/useForm';
import { ToDoList } from './ToDoList';
 

const init = () => {
  return JSON.parse(localStorage.getItem('toDos')) || [];
  // init lee lo que está en el localStorage y lo pasa al initialState.
  // return [ {
  //     id: new Date().getTime(),
  //     desc: 'Aprender inglés',
  //     done: false,
  //    } ]
}

export const TodoApp = () => {
  const [ toDos, dispatch ] = useReducer(toDoReducer, [], init);
  
  const [ { description }, handleInputChange, reset ] = useForm({
    description: '',
  })

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

 const handleSubmit = (e) => {
   e.preventDefault();
   if (description.trim().length <= 1) {
     return;
   }

  const newTodo = {
   id: new Date().getTime(),
   desc: description,
   done: false,
   };
   
   const action = {
     type: 'add',
     payload: newTodo,
   }

   dispatch(action);
   reset();
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
      <h4 className='text-center'>Add To-Do</h4>
      <hr />

      <form
       className="d-grid gap-2"
       onSubmit={ handleSubmit }
      >
       <input
        autoComplete='off'
        className='form-control inp-elis'
        name="description"
        onChange={handleInputChange}
        placeholder='Create a note...'
        type="text"
        value={description}
       />
       <button
        className="btn-elis btn btn-outline-primary"
        type='submit'
       >
        Add
       </button>
       
      </form>
     </div>
   </div>
   </div>
  )
}
