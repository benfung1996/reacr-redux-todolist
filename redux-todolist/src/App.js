import React, { Component } from 'react';
import Todos from './components/Todos';
import AddFrom from './components/AddFrom';
import { Provider } from 'react-redux';
import store from './store';
import { uuid } from 'uuidv4';

export default class App extends Component {
  state = {
    todos: [
      { id: uuid(), content: 'test1' },
      { id: uuid(), content: 'test2' }
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

  addTodo = (todo) => {
    todo.id = uuid()
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }

  render() {
    return (
      <Provider store={store}>
        <div className="todo-app container">
          <h1 className="center blue-text">Todo's</h1>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
          <AddFrom addTodo={this.addTodo} />
        </div>
      </Provider>
    )
  }
}
