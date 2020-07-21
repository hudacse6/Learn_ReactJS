import React, { Component } from "react";

class Counter extends Component {
  state = {
    // tag: ["tag1", "tag2", "tag3"],
    tag: [],
  };

  renderTags() {
    if (this.state.tag.length === 0) return <p>There is no tags here !! </p>;

    return (
      <ul>
        {this.state.tag.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return <div>{this.renderTags()}</div>;
  }
}

export default Counter;
