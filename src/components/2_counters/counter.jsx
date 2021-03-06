import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value,
  };
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("props", this.props);

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.countFormat()}</span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
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
