import { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    app_version: "v0.1",
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

  toggleComplete = (id) => {
        this.setState({ todos: this.state.todos.map(todo => {
          if(todo.id === id) todo.completed = !todo.completed
          return todo;
        }) 
      })
  }

  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
}

  render(){
    return (
      <div className="App">
        <h1>Todo App {this.state.app_version}</h1>
        <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
    
  
}

export default App;
