import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </Provider>
    )
  }
}
