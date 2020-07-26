import React, { Component } from 'react';
import Todos from './components/Todos';

export default class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'test1'},
      {id:2, content: 'test2'}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} />
      </div>
    )
  }
}
