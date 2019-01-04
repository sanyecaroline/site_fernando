import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import Itero from './sections/Itero';
import Invisalign from './sections/Invisalign';
import Evaluation from './sections/Evaluation';
import Header from './sections/Header';
import Tips from './sections/Tips';
import Contact from './sections/Contact';

import theme from './consts/theme';

class App extends Component {  
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
      isMobile: false,
    };    
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
    this.handleWindowSizeChange();
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  
  handleWindowSizeChange = () => {    
    let uagent = navigator.userAgent.toLowerCase();
    let isMobile = (uagent.search("iphone") > -1 || uagent.search("ipad") > -1 
    || uagent.search("android") > -1 || uagent.search("blackberry") > -1
    || uagent.search("webos") > -1) || uagent.search("IEMobile") > -1
    || window.innerWidth <= 1000;
    this.setState({ width: window.innerWidth, isMobile: isMobile });    
  };

  render() {    
    return (      
      <ThemeProvider theme={theme}>
        <div className="App">        
          {/*<p>Mobile {JSON.stringify(this.state.isMobile)}  User: {JSON.stringify(navigator.userAgent.toLowerCase())}</p>*/}
          <Header isMobile={this.state.isMobile}/>
          <Invisalign />
          <Evaluation />
          <Itero /> 
          <Tips />
          <Contact />               
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
