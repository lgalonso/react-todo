import React, { Component } from 'react'

export class AddTodo extends Component {
  state = {
    title: "",
    tag: "",
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
      this.props.addTodo(this.state.title, this.state.tag);
      this.setState({ title: '' , tag: ''});
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          placeholder="Add Todo Title..."
          style={{ flex: "10", padding: "5px" }}
          value={this.state.title}
          onChange={this.onChange}
          required
        />
        <input
          type="text"
          name="tag"
          placeholder="Add Todo Tag..."
          style={{ flex: "10", padding: "5px" }}
          value={this.state.tag}
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
