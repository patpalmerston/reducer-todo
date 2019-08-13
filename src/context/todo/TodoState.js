import React, { useReducer } from 'react';

import TodoContext from './todoContext';
import todoReducer from './todoReducer';
import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from '../types';


const TodoState = props => {
	const initialState = {
		
		todos: [
			{
				id: 1,
				item: 'Get better at stuff',
				completed: false
			},
			{
				id: 2,
				item: 'Be Awesome',
				completed: false
			}
		]
	};

	const [state, dispatch] = useReducer(todoReducer, initialState);

	// add todos

	const addTodo = todo => {
		dispatch({ type: ADD_TODO, payload: todo });
	};

  // delete todos
  const deleteTodo = todo => {
    dispatch({ type: DELETE_TODO, payload: todo.id})
  }

  // edit todos
  
  // toggle todo
  const toggleTodo = todo => {
    dispatch({ type: TOGGLE_TODO, payload: todo.id})
  }

	return (
		<TodoContext.Provider
			value={{
				todos: state.todos,
        addTodo,
        toggleTodo,
        deleteTodo
			}}
		>
			{props.children}
		</TodoContext.Provider>
	);
};

export default TodoState;
