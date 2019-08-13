import React, { useContext } from 'react';
import TodoContext from '../../context/todo/todoContext';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const TodoList = () => {
	const todoContext = useContext(TodoContext);

	const { todos } = todoContext;
	return (
		<div>
      <TodoForm />
			{todos.map(todo => <TodoItem todo={todo}/>)}
			
		</div>
	);
};

export default TodoList;
