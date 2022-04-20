import React from 'react'
import { useForm } from '../../hooks/useForm';

export const ToDoAdd = ({ handleAddToDo }) => {

 const [ { description }, handleInputChange, reset ] = useForm({
  description: '',
 });
 
 const handleSubmit = (e) => {
  e.preventDefault();
  if (description.trim().length <= 1) {
    return;
  }

 const newToDo = {
  id: new Date().getTime(),
  desc: description,
  done: false,
  };

  handleAddToDo(newToDo);
  reset();
}

  return (
   <>
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
   </>
  )
}
