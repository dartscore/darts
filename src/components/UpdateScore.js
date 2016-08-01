import React, { Component } from 'react';

class UpdateScore extends Component {

  constructor(props) {
    super(props)
    this.state = {
      score: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onScoreUpdate(this.state.score);
    this.setState({score: ''});
  }

  handleChange = (event) => {
    this.setState({score: event.target.value});
  }

  render() {
    return (
      <form className="pure-form update-score"  onSubmit={this.handleSubmit}>

        <label htmlFor="amountScored">You scored</label>
        <input id="amountScored" ref="amountScored" type="number" placeholder="0"
          min={this.props.min}
          max={this.props.max}
          value={this.state.score}
          onChange={this.handleChange} />


        <button type="submit" className="pure-button pure-button-primary" >Score</button>
      </form>
    );
  }
}

export default UpdateScore;
