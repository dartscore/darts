import React, { Component } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Score from './components/Score';
import Checkout from './components/Checkout';
import UpdateScore from './components/UpdateScore';
import './styles/style.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      score: 501
    }
  }

  onUpdate = (value) => {
    var newScore = this.state.score - value;
    this.setState({
      score: newScore
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Score score={this.state.score} />
          <Checkout score={this.state.score} />
          <UpdateScore onScoreUpdate={this.onUpdate} min={0} max={180} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
