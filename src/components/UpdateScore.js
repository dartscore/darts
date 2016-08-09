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

  handleUndo = (event) => {
    this.props.onUndo();
  }

  render() {
    return (
      <form className="form update-score"  onSubmit={this.handleSubmit}>


        <div className="form__row">
          <button type="button" className="btn btn--circle" onClick={this.handleUndo}>↩&#xFE0E</button>
          <div className="update-score">
            <label htmlFor="amountScored" className="form__label">Score</label>
            <input id="amountScored" ref={function(input) {
            if (input != null) {
              input.focus();
            }
          }} type="number" placeholder="0"
              min={this.props.min}
              max={this.props.max}
              value={this.state.score}
              onChange={this.handleChange} className="form__field" />
          </div>
          <button type="submit" className="btn btn--circle">＋</button>
        </div>
      </form>
    );
  }
}

export default UpdateScore;
