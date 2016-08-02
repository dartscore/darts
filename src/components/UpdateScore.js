import React, { Component } from 'react';
var ReactDOM = require('react-dom');


class UpdateScore extends Component {

  constructor(props) {
    super(props)
    this.state = {
      score: ''
    }
  }

  componentDidMount = () => {
    ReactDOM.findDOMNode(this.refs.amountScored).focus(); 
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
      <form className="form update-score"  onSubmit={this.handleSubmit}>

        <div className="form__row">
          <label htmlFor="amountScored" className="form__label">You scored</label>
          <input id="amountScored" ref="amountScored" type="number" placeholder="0"
            min={this.props.min}
            max={this.props.max}
            value={this.state.score}
            onChange={this.handleChange} className="form__field" />
        </div>

        <button type="submit" className="btn">Add Score</button>
      </form>
    );
  }
}

export default UpdateScore;
