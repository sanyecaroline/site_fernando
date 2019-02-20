import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';

import Itero from './sections/Itero';
import Invisalign from './sections/Invisalign';
import Evaluation from './sections/Evaluation';
import Header from './sections/Header';
import Tips from './sections/Tips';
import Contact from './sections/Contact';
import About from './sections/About';
import Images from './sections/Images';

import theme from './consts/theme';

const GlobalStyle = createGlobalStyle`
  html: {
    width: 100%;
    height: auto;
    margin: 0 auto; 
  }
  body {
    width: 100%;
    height: auto;
    margin: 0 auto;    
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

const Button = styled.a`
  cursor: pointer;
  display: block;
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 35px;
  height: 35px;
  border-radius: 3px;
  user-select: none;   
  background-color: ${props => props.theme.pallete.black}80;
`;

const Arrow = styled.span`
  border: solid ${props => props.theme.pallete.white};
  border-width: 0 2px 2px 0;
  display: inline-block;  
  padding: 4px;  
  transform: rotate(-135deg);
  margin-top: 14px;
  margin-left: 12px;
`;

class App extends Component {  
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      isMobile: false,
      isScrolled: false,
    };    
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
    window.addEventListener('scroll', this.onScroll, { passive: true });
    this.handleWindowSizeChange();
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
    window.removeEventListener('scroll', this.onScroll, { passive: true });
  }

  onScroll = () => {
    const isScrolled = (window.pageYOffset || document.body.scrollTop) > 160;
    if (isScrolled !== this.state.isScrolled) {
      this.setState({ ...this.state, isScrolled: isScrolled });
    }

  };
  
  handleWindowSizeChange = () => {    
    let uagent = navigator.userAgent.toLowerCase();
    let isMobile = (uagent.search("iphone") > -1 || uagent.search("ipad") > -1 
    || uagent.search("android") > -1 || uagent.search("blackberry") > -1
    || uagent.search("webos") > -1) || uagent.search("IEMobile") > -1
    || window.innerWidth <= 1000;
    this.setState({ width: window.innerWidth, height: window.innerHeight, isMobile: isMobile });    
  };

  render() {    
    return (      
      <ThemeProvider theme={theme}>
        <div className="App">      
          <GlobalStyle />   
          <Header isMobile={this.state.isMobile}/>
          <Images />
          <Invisalign />
          <About />
          <Evaluation />
          <Itero /> 
          <Tips />        
          <Contact />    
          {this.state.isScrolled &&
          <Button onClick={() => scroll.scrollToTop()}>
            <Arrow/>
          </Button>}
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
