import React, { Component } from 'react';

class Score extends Component {

  render() {
    console.log(this.props.score)
    return (
      <div className="score">
        {this.props.score}
      </div>
    );
  }
}

export default Score;
