import React, { Component } from 'react';
import Itero from './sections/Itero';
import Invisalign from './sections/Invisalign';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Itero />
        <Invisalign />
      </div>
    );
  }
}

export default App;
