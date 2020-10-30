import { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header'

class App extends Component {
  state = {
    app_version: "v0.2",
    todos: [
      {
        id: 1,
        tittle: 'todo 1',
        completed: false
      },
      {
        id: 2,
        tittle: 'todo 2',
        completed: false
      },
      {
        id: 3,
        tittle: 'todo 3',
        completed: false
      }
    ]
  }

  /** By using arrow functions to define our methods we avoid having to bind them everytime we pass them down to a component
   * 
   * @param {*} id 
   *
   */
  toggleComplete = (id) => {
        this.setState({ todos: this.state.todos.map(todo => {
          if(todo.id === id) todo.completed = !todo.completed
          return todo;
        }) 
      })
  }

  /**
   * 
   * @param {*} id 
   */
  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
}

  render(){
    return (
      <div className="App">
        <Header app_version={this.state.app_version}></Header>
        {/* <h1>Todo App {this.state.app_version}</h1> */}
        <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
    
  
}

export default App;
