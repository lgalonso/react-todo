import React, { Component } from "react";

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
    this.setState({ title: "", tag: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <div className="input-group mb3">
          <input
            className="form-control"
            type="text"
            name="title"
            placeholder="Add Todo Title..."
            aria-describedby="basic-addon1"
            value={this.state.title}
            onChange={this.onChange}
            required
          />
          <input
            className="form-control"
            type="text"
            name="tag"
            placeholder="Add Custom Tag..."
            value={this.state.tag}
            onChange={this.onChange}
          />
          <select className="custom-select">
            <option selected>Existing Labels</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <button class="btn btn-outline-secondary" type="submit">
            Add
          </button>
        </div>
      </form>
    );
  }
}

export default AddTodo;
