import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    title: "",
    tag: "",
    tagSelected: "",
    existing_tags: this.props.existing_tags,
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
    this.props.addTodo(
      this.state.title,
      this.state.tagSelected !== "" ? this.state.tagSelected : this.state.tag
    );

    if (this.state.tag !== "" && !this.tagInList(this.state.tag)) {
      this.setState({
        title: "",
        tag: "",
        existing_tags: [...this.state.existing_tags, this.state.tag],
      });
    } else {
      this.setState({ title: "", tag: "" });
    }
  };

  tagInList = (new_tag) => {
    return (
      this.state.existing_tags.filter((tag) => tag === new_tag)[0] === new_tag
    );
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
          <select
            className="form-control"
            name="tagSelected"
            onChange={this.onChange}
          >
            <option value="" selected disabled>
              Existing Tags
            </option>
            {this.state.existing_tags.map((tag) => {
              return (
                <option value={tag} key={tag}>
                  {tag}
                </option>
              );
            })}
          </select>
          <div className="input-group-append btn-group">
            <button class="btn btn-outline-secondary" type="submit">
              Add
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default AddTodo;
