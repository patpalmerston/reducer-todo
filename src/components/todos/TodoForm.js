import React, { useState, useContext } from 'react';
import TodoContext from '../../context/todo/todoContext';

const TodoForm = () => {
	const todoContext = useContext(TodoContext);

	const { addTodo } = todoContext;



	const [newTodo, setNewTodo] = useState({
		item: '',
		completed: false,
		id: Math.floor(Math.random() * 99999999)
	});

	const handleChanges = e => {
		setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
  };
  
  const onSubmit = e => {
    e.preventDefault()
    addTodo(newTodo)
    console.log(newTodo)
  }

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					type='text'
					placeholder='item'
					name='item'
					onChange={handleChanges}
				/>
			</form>
		</div>
	);
};

export default TodoForm;
