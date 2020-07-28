import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    // imgageUrl: 'https://picsum.photos/200',
  };

  // style = {
  //   fontSize:30,
  //   fontWidth: 'bold',
  // };

  render() {
    return (
      <div>
        {/* <img src={this.state.imgageUrl} alt=" " /> */}
        {/* <span style={this.style} className="badge badge-primary m-2">
        {this.countFormat()}</span> */}
        {/* <span style={{ fontSize: 10 }} className="badge badge-primary m-2">
          {this.countFormat()}
        </span> */}
        <span className="badge badge-primary m-2">{this.countFormat()}</span>
        {/* <span>{this.state.count}</span> */}
        <button className="btn btn-secondary btn-sm m-2">Increment</button>
      </div>
    );
  }

  countFormat() {
    const { count } = this.state;
    // return this.state.count === 0 ? "zero" : this.state.count;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
