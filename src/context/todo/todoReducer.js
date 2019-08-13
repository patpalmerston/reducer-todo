import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from '../types';

export default (state, action) => {
  console.log(action)
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case TOGGLE_TODO:
      return{ 
        ...state,
        todos: state.todos.map(todo => {
        if (todo.id === action.payload) {
          return {...todo, completed: !todo.completed}
        }
        return todo;
      })
    }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => !(todo.id === action.payload))
      }

    default:
      return state;
  }
}