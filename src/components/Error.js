import React, { Component } from 'react';

class Error extends Component {

  render() {
    return (
      <p className={ this.props.show ? "error msg is-on" : "error msg" }>That looks wrong. Are you sure?</p>
    );
  }
}

export default Error;
