import React from 'react';
import PropTypes from 'prop-types'

const Todo = (props) => {

  return (
    <div className="Todo">
      <p>{props.todo.title}</p>
      <button type="button" onClick={() => props.editTodo(props.todo)}>Edit</button>
      <button type="button" onClick={() => props.deleteTodo(props.todo._id)}>Delete</button>
    </div>
  )

}

Todo.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired
}

export default Todo
