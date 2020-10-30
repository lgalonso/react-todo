import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todoItem.completed ? 'line-through' : 'none'
        }
    }
    
    render() {
        const { id, tittle } = this.props.todoItem;
        return (
            <div style={ this.getStyle() }>
                <p> 
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />{' '} 
                    {tittle} 
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todoItem: PropTypes.object.isRequired
}


export default TodoItem
