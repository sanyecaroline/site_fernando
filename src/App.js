import React, { Component } from 'react';
import Itero from './sections/Itero';
import Invisalign from './sections/Invisalign';
import Evaluation from './sections/Evaluation';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Invisalign />
        <Evaluation />
        <Itero />        
      </div>
    );
  }
}

export default App;
