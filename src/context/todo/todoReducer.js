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
      return state.map(todo => {
        if (todo.id === action.payload) {
          return {...todo, completed: true}
        }
        return todo;
      })
    case DELETE_TODO:
      return state.filter(todo => !(todo.id === action.id))

    default:
      return state;
  }
}