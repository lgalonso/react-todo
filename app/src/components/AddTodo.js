import React, { Component } from 'react'

export class AddTodo extends Component {
  state = {
    title: "",
  };

  /**
   * Receives an event fired by onChange on the different input fields
   * By using this syntax we can handle multiple events on different inputs as long as the names 
   * are all the same (state, form)
   * @param {*} e
   */
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
      e.preventDefault();
      this.props.addTodo(this.state.title);
      this.setState({ title: '' });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          placeholder="Add New Todo..."
          style={{ flex: "10", padding: "5px" }}
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Add"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

export default AddTodo
