import React, { Component } from 'react';

class Footer extends Component {

  handleClick = (event) => {
    event.preventDefault();
    this.props.onChooseGame(event.target.value);
  }


  render() {
    return (
      <footer className="footer">
        <p>New game:</p>
        <div className="btn-grp">
          <button className="btn btn--sml" value="301" onClick={this.handleClick}>301</button>
          <button className="btn btn--sml" value="501" onClick={this.handleClick}>501</button>
        </div>
      </footer>
    );
  }
}

export default Footer;
