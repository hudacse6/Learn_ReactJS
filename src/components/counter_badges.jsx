import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 10,
    tag: ["tag1", "tag2", "tag3", "tag4", "tag5"],
  };

  render() {
    return (
      <div>
        {/* <span className="badge badge-primary m-2">{this.countFormat()}</span> */}
        <span className={this.getBadgeClasses()}>{this.countFormat()}</span>
        <button className="btn btn-secondary btn-sm m-2">Increment</button>
        <ul>
          {this.state.tag.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  countFormat() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
