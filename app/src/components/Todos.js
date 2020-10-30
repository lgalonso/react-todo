import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component{

    render(){
        return (
            this.props.todos.map((todo) => (
                // <h3>{ todo.tittle }</h3>
                <TodoItem key={todo.id} todoItem={todo} toggleComplete={this.props.toggleComplete}/>
                ))
        );
    }
}

// PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;