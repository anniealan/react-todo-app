import React, {PureComponent} from 'react'
import Form from './Form'
import TodosList from './TodosList'
import update from 'immutability-helper'

class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      todos: [],
      active_todo_id: null,
      title: "",
      error: false
    }
  }

  componentDidMount() {
    // fetch the todos
    this.setState({
      todos: [
        {
          _id: 1,
          title: "Eat"
        }, {
          _id: 2,
          title: "Sleep"
        }, {
          _id: 3,
          title: "Code"
        }
      ]
    })
  }

  deleteTodo = (_id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo._id != _id)
    })
  }

  addTodo = () => {
    if (this.state.title) {
      this.setState({
        todos: [...this.state.todos, {id: this.state.todos.length,title: this.state.title}],
        error: false,
        title: ""
      })
    } else {
      this.setState({error: true})
    }

  }
  editTodo = ({_id, title}) => {
    this.setState({active_todo_id: _id, title, error: false})
  }
  inputChange = (title) => {
    this.setState({title})
  }
  updateTodo = () => {
    if (this.state.title) {
      const index = this.state.todos.findIndex(todo => todo._id == this.state.active_todo_id)
      const updatedTodo = update(this.state.todos[index], {title: {$set: this.state.title}})
      const todos = update(this.state.todos, {$splice: [[index, 1, updatedTodo]]})
      this.setState({error: false, title: "", todos, active_todo_id: null})
    } else {
      this.setState({error: true})
    }
  }

  render() {
    return (
      <div>
        <Form error={this.state.error}
          title={this.state.title}
          inputChange= {this.inputChange}
          active_todo_id={this.state.active_todo_id}
          addTodo= {this.addTodo}
          updateTodo= {this.updateTodo}/>
        <TodosList todoList={this.state.todos}
          deleteTodo= {this.deleteTodo}
          editTodo= {this.editTodo}/>
      </div>
    )
  }
}

export default App
