import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todoItem.completed ? "line-through" : "none",
    };
  };

  render() {
    const { id, title, tag } = this.props.todoItem;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.toggleComplete.bind(this, id)}
          />{" "}
          <span>{title}</span>
          <span class="badge badge-pill badge-primary" style={tag !== "" ? {} : { display: "none" }}>
            {tag}
            <button
              className="badge badge-pill badge-light"
              onClick={this.props.clearTag.bind(this, id)}
              style={tag !== "" ? clearStyle : { display: "none" }}
            >
              <span>
                <i class="fas fa-times"></i>
              </span>
            </button>
          </span>
          <button
            className="btn btn-outline-danger"
            onClick={this.props.deleteTodo.bind(this, id)}
            style={btnStyle}
          >
            <i class="fas fa-trash"></i>
          </button>
        </p>
      </div>
    );
  }
}

// PropTypes
TodoItem.propTypes = {
  todoItem: PropTypes.object.isRequired,
};

const btnStyle = {
  cursor: "pointer",
  float: "right",
};

const clearStyle = {
//   height: "4vh",
  background: "white",
};

export default TodoItem;
