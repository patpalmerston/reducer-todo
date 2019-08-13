import React, {useContext} from 'react'
import TodoContext from '../../context/todo/todoContext'

const TodoItem = ({todo}) => {
  
  const todoContext = useContext(TodoContext);

  const { deletTodo } = todoContext;// to be made 

  const { id, item, completed } = todo;
  
  return (
    <div>
      {item}
    </div>
  )
}

export default TodoItem
