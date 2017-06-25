import React, {PureComponent} from 'react';

const Todo = (props) => {

  return (
    <div className="Todo">
      <p>{props.todo.title}</p>
      <button type="button" onClick={() => props.editTodo(props.todo)}>Edit</button>
      <button type="button" onClick={() => props.deleteTodo(props.todo._id)}>Delete</button>
    </div>
  )

}

export default Todo
