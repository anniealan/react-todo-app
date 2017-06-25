import React from 'react'
import PropTypes from 'prop-types'

const Form = (props) => {

  const addTodo = () => {
    props.addTodo()
  }
  const updateTodo = () => {
    props.updateTodo()
  }
  const renderButton = () => {
    if (props.mode === "add") {
      return <button type="button" onClick={addTodo}>Add</button>

    } else {
      return <button type="button" onClick={updateTodo}>Update</button>
    }
  }
  const renderError = () => {
    if (props.error) {
      return <span> Title is required</span>
    }
  }
  const handleChange = (e) => {
    props.inputChange(e.target.value)
  }

  return (
    <div className="Form">
      <input type="text" id="title"
        value={props.title} placeholder="title"
        onChange={handleChange}/>
      {renderButton()}
      {renderError()}
    </div>
  )
}

Form.propTypes = {
  error: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  addTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  inputChange: PropTypes.func.isRequired
}
export default Form
