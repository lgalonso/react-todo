import { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        tittle: '',
        completed: false
      },
      {
        id: 2,
        tittle: '',
        completed: false
      },
      {
        id: 3,
        tittle: '',
        completed: false
      }
    ]
  }
  render(){
    console.log(this.state.todos)
    return (
      <div className="App">
        <h1>App 2</h1>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
    
  
}

export default App;
