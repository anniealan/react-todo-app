import React, {PureComponent} from 'react'
import Form from './Form'
import TodosList from './TodosList'
import update from 'immutability-helper'

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      mode: 'add',
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

  deleteTodo(_id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo._id != _id)
    })
  }

  addTodo() {
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
  editTodo({_id, title}) {
    this.setState({active_todo_id: _id, mode: 'edit', title, error: false})
  }
  inputChange(title) {
    this.setState({title})
  }
  updateTodo() {
    if (this.state.title) {
      const index = this.state.todos.findIndex(todo => todo._id == this.state.active_todo_id)
      const updatedTodo = update(this.state.todos[index], {title: {$set: this.state.title}})
      const todos = update(this.state.todos, {$splice: [[index, 1, updatedTodo]]})
      this.setState({error: false, title: "", todos, mode: 'add'})
    } else {
      this.setState({error: true})
    }
  }

  render() {
    return (
      <div>
        <Form mode={this.state.mode} error={this.state.error}
          title={this.state.title}
          inputChange= {(title)=>{this.inputChange(title)}}
          active_todo_id={this.state.active_todo_id}
          addTodo= {()=>this.addTodo()}
          updateTodo= {()=>this.updateTodo()}/>
        <TodosList todoList={this.state.todos}
          deleteTodo= {_id=>this.deleteTodo(_id)}
          editTodo= {todo=>this.editTodo(todo)}/>
      </div>
    )
  }
}

export default App
