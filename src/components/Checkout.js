import React, { Component } from 'react';
import CheckoutData from '../data/checkouts'

class Checkouts extends Component {

  render() {
    return (
      <div className="checkouts">
        {CheckoutData[this.props.score] && CheckoutData[this.props.score] !== "None" ? CheckoutData[this.props.score] : 'Keep throwing'}
      </div>
    );
  }
}

export default Checkouts;
