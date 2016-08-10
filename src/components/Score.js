import React, { Component } from 'react';

class Score extends Component {

  componentDidUpdate() {
      document.body.scrollTop = 0
      console.log('scrolltop: ', document.body.scrollTop)
  }

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
