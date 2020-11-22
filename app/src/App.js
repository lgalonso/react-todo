import { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import { v4 as uuid } from "uuid";
class App extends Component {
  state = {
    app_version: "v0.4",
    todos: [
      {
        id: uuid(),
        title: "todo 1",
        tag: "test",
        completed: false,
      },
      {
        id: uuid(),
        title: "todo 2",
        tag: "",
        completed: false,
      },
      {
        id: uuid(),
        title: "todo 3",
        tag: "",
        completed: false,
      },
    ],
  };

  /** By using arrow functions to define our methods we avoid having to bind them everytime
   * we pass them down to a component
   *
   * @param {*} id
   *
   */
  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      }),
    });
  };

  /**
   *
   * @param {*} id
   */
  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  clearTag = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) todo.tag = "";
        return todo;
      }),
    });
  };

  addTodo = (title, tag) => {
    const newTodo = {
      id: uuid(),
      title,
      tag,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <div className="App">
        <Header app_version={this.state.app_version}></Header>
        <div className="jumbotron">
          <AddTodo addTodo={this.addTodo}></AddTodo>
          <Todos
            todos={this.state.todos}
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
            clearTag={this.clearTag}
          />
        </div>
      </div>
    );
  }
}

export default App;
