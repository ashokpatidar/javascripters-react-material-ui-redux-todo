import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import VisualTodoList from './containers/VisualTodoLists';


class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar
    title="Redux Relax Todo"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
        <h1></h1>
        <AddTodo/>
        <VisualTodoList/>
      </div>
    );
  }
}

export default App;
