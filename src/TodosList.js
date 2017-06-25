import React from 'react';
import Todo from './Todo'

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

export default TodoList
