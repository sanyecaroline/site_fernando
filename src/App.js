import React, { Component } from 'react';
import Itero from './sections/Itero';
import Invisalign from './sections/Invisalign';
import Evaluation from './sections/Evaluation';
import Header from './sections/Header';
import Contact from './sections/Contact'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Invisalign />
        <Evaluation />
        <Itero /> 
        <Contact />       
      </div>
    );
  }
}

export default App;
