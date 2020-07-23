import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TodoList from './components/TodoList/TodoList';
import Todo from './components/Todo/Todo';

export default class App extends Component {
  render() {
    return (
     <Provider store={store}>
       <TodoList />
       <Todo />
     </Provider>
    )
  }
}
