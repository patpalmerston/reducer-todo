import React, { useContext } from 'react';
import TodoContext from '../../context/todo/todoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
	const todoContext = useContext(TodoContext);

	const { todos } = todoContext;
	return (
		<div>
			{todos.map(todo => <TodoItem todo={todo}/>)}
			
		</div>
	);
};

export default TodoList;
