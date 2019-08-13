import React, { useReducer } from 'react';

import TodoContext from './todoContext';
import todoReducer from './todoReducer';
import { ADD_TODO, DELETE_TODO, EDIT_TODO } from '../types';

const TodoState = props => {
	const initialState = {

    counter: 2,
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

	// delete todos

	// edit todos

	return (
		<TodoContext.Provider
			value={{
				todos: state.todos
			}}
		>
			{props.children}
		</TodoContext.Provider>
	);
};

export default TodoState;
