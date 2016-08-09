import React, { Component } from 'react';

class Success extends Component {

  render() {
    return (
      <p className={ this.props.show ? "success msg is-on" : "success msg" }>You did it!</p>
    );
  }
}

export default Success;
