import React, {useContext} from 'react'
import TodoContext from '../../context/todo/todoContext'

const TodoItem = ({todo}) => {
  
  const todoContext = useContext(TodoContext);

  const { deleteTodo, toggleTodo } = todoContext;// to be made 

  const { id, item, completed } = todo;

  const onDelete = () => {
    deleteTodo()
  }
  
  return (
    <div style={{ textDecoration: completed ? 'line-through' : "none"}}>
      {item}
      <button onClick={onDelete}>x</button>
    </div>
  )
}

export default TodoItem
