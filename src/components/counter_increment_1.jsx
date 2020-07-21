import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    // console.log("Increment Clicked", this);
    // this.state.count++;
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className="badge badge-primary m-2">{this.countFormat()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
      </div>
    );
  }

  countFormat() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
