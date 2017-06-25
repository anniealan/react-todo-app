import React from 'react';
import Todo from './Todo'
import PropTypes from 'prop-types'

const TodoList = (props) => {

  return (
    <div className="TodoList">
      {props.todoList.map(todo => <Todo
        key = {todo._id}
        todo = {todo}
        deleteTodo = {_id => props.deleteTodo(_id)}
        editTodo = {todo => props.editTodo(todo)} />)}
    </div>
  )
}

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired
}

export default TodoList
