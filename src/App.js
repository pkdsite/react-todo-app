import React, {Component} from 'react';
import './App.css';
import TodoItem from './Todo/TodoItem';
import todosData from './Todo/todosData';
import _ from 'lodash';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: todosData,
      value: '',
      completed: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  handleChangeInput(event) {
    this.setState({
      value: event.target.value
    })
  }

  addTodo(value) {
    if (value.length > 0) {
      this.state.todos.push({
        "id": (new Date().getTime()).toString(36),
        "text": value,
        "completed": this.state.completed
      })
    }
    this.setState({ todos: this.state.todos, value: '' })
  }

  removeItem(id) {
      this.setState(prevState => {
        const updatedTodos = _.remove(prevState.todos, (item) => {
          return item.id != id
        })
        return {
          todos: updatedTodos
        }
      })
  }

  render() {
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} removeItem={this.removeItem}/>)
    return (
      <div className="todo-list">
        <div className="add-todo">
          <input type="text" value={this.state.value} onChange={this.handleChangeInput.bind(this)}></input>
          <button onClick={() => this.addTodo(this.state.value)}>Add</button>
        </div>
        
        {todoItems}
      </div>
    )
  }
}

export default App;
