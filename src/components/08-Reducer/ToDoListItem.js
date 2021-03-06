import React from "react";

export const ToDoListItem = ({ todo, index, handleDelete, handleToggle }) => {
  return (
    <li key={todo.id} className="dk-bgc list-group-item">
      <p
        className={`${todo.done ? "complete" : ''}`}
        onClick={() => handleToggle(todo.id)}
      >
        {index + 1}. {todo.desc}
      </p>
      <button
       className="btn btn-danger"
       onClick={ () => handleDelete(todo.id) }
      >
          Delete
      </button>
    </li>
  );
};
