import React, { Component } from 'react';
import Todos from './components/Todos';

export default class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'test1'},
      {id:2, content: 'test2'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    )
  }
}
