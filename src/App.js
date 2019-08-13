import React from 'react';
import Home from './components/pages/Home';

import TodoState from './context/todo/TodoState';

import './App.css';

function App() {
	return (
		<TodoState>
			<div className='App'>
				<h1>Todo useReduce</h1>
				<Home />
			</div>
		</TodoState>
	);
}

export default App;
