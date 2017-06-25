import React from 'react';
import PropTypes from 'prop-types'

const Todo = (props) => {

  const editTodo = () => {
    props.editTodo(props.todo)
  }
  const deleteTodo = () => {
    props.deleteTodo(props.todo._id)
  }
  return (
    <div className="Todo">
      <p>{props.todo.title}</p>
      <button type="button" onClick={editTodo}>Edit</button>
      <button type="button" onClick={deleteTodo}>Delete</button>
    </div>
  )

}

Todo.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired
}

export default Todo
