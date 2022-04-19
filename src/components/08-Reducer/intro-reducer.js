const inicialState = [ {
 id: 1,
 todo: 'comprar pan',
 done: false,
}]

const todoReducer = (state = inicialState, action) => {
 if (action?.type === 'add') {
  return [
   ...state,
   action.payload
  ]  
 }
 return state;
}

const newTodo = {
 id: 2,
 todo: 'comprar leche',
 done: false,
}

const actionAddTodo = {
 type: 'add',
 payload: newTodo,
}

let toDos = todoReducer();

toDos = todoReducer(toDos, actionAddTodo)


console.log(toDos);