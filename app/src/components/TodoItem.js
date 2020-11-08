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
        const { id, title, tag } = this.props.todoItem;
        return (
            <div style={ this.getStyle() }>
                <p> 
                    <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)} />{' '} 
                    {title}
                    <span style={tag != '' ? spanStyle : {display: 'none'}}>{tag}</span>
                    <button className='btn btn-danger btn-xs' onClick={this.props.deleteTodo.bind(this, id)} style={btnStyle}>x</button>
                    <button className='btn btn-flat' onClick={this.props.clearTag.bind(this, id)} style={tag != '' ? {float: 'right'} : {display: 'none'}}>clear tag</button>
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todoItem: PropTypes.object.isRequired
}

const btnStyle = {
    background: 'red',
    color: 'white',
    border: 'none',
    // padding: '5px 9px',
    // borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'

}

const spanStyle = {
    background: 'coral',
    color: 'white',
    padding: '2px',
}

const clearStyle = {
    float: 'right',
    backgroundColor: 'white',
    color: 'black',
    border: '2px solid grey',
    
}

export default TodoItem
