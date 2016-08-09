import React, { Component } from 'react';

// import Header from './components/Header';
import Footer from './components/Footer';
import Score from './components/Score';
import Checkout from './components/Checkout';
import UpdateScore from './components/UpdateScore';
import Error from './components/Error';
import Success from './components/Success';
import './styles/style.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      total: 501,
      scores: [0],
      showError: false,
      showSuccess: false
    }
  }

  onUpdate = (value) => {

    var newScore = this.state.total - value;

    if (newScore < 0) {
      this.setState({
        showError: true
      })
      return
    }

    this.state.scores.push(value * 1); //cast it to a number

    this.setState({
      total: newScore,
      showError: false
    })
    console.log(this.state.scores)

    if (newScore === 0) {
      this.setState({showSuccess: true})
    } else {
      this.setState({showSuccess: false})
    }
  }

  // addScore = () => {
  //   var newScore = this.state.total - this.state.scores[this.state.scores.length];
  //   this.setState({
  //     total: newScore
  //   })
  // }

  chooseGame = (value) => {
    this.setState({
      total: value,
      scores: [0],
      showError: false,
      showSuccess: false
    })
  }

  onUndo = () => {
    if (this.state.total === 501 || this.state.total === 301) {
      return
    }
    this.setState({
      total: this.state.total*1 + this.state.scores.pop(),
      scores: this.state.scores
    });
  }

  render() {
    return (
      <div className="App">
        <main>
          <Success show={this.state.showSuccess } />
          <Error show={this.state.showError} />
          <Score score={this.state.total} />
          <Checkout score={this.state.total} />
          <UpdateScore onUndo={this.onUndo} onScoreUpdate={this.onUpdate} min={0} max={180} />
        </main>
        <Footer onChooseGame={this.chooseGame} />
      </div>
    );
  }
}

export default App;
