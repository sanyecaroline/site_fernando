import React, { Component } from 'react';

import styled, { css } from 'styled-components';

import images from '../consts/images';

import rem from '../utils/rem';

import { desktopImagesHeight, mobileImagesHeight } from '../consts/sizes';
import { mobile } from '../utils/media';

const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  margin: auto;
  height: ${rem(desktopImagesHeight)};
  ${mobile(css`
    height: ${rem(mobileImagesHeight)};
  `)};
`;

const Slide = styled.div`
  box-sizing: border-box;  
  display: ${props => props.active === true ? 'block' : 'none'};  
  animation-name: fade;
  animation-duration: 2.5s;    
  background-repeat: no-repeat;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center; 
  height: ${rem(desktopImagesHeight)};
  ${mobile(css`
    height: ${rem(mobileImagesHeight)};
  `)};
  @keyframes fade {
    from {opacity: 0.1} 
    to {opacity: 1}
  }
`;

const next = css`
  right: 0;
  border-radius: 3px 0 0 3px;
`;
 
const Button = styled.a`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: 10px;
  margin-top: -22px;
  padding: 16px;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;   
  ${props => props.next && next} 
  &:hover {
    background-color: ${props => props.theme.pallete.black}80;    
  }
`;

const right = css`
  transform: rotate(-45deg);
  margin-top: 5px;
  margin-left: -10px;
`;

const left = css`
  transform: rotate(135deg);
  margin-top: 5px;  
`;

const Arrow = styled.span`
  border: solid ${props => props.theme.pallete.white};
  border-width: 0 2px 2px 0;
  display: inline-block;  
  padding: 10px;  
  ${props => props.left && left}
  ${props => props.right && right}
`;

class Images extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      images: images,
      activeIndex: 0,
      handleInterval: 0
    }    
  }

  
  componentWillMount(){
    this.newInterval();
  }

  cancelInterval = () => clearInterval(this.state.handleInterval);

  newInterval = () => this.setState({...this.state, handleInterval: setInterval(this.showImages, 3500)});

  componentWillUnmount(){
    this.cancelInterval();
  }

  showImages = () => {
    let nextIndex = this.state.activeIndex + 1;
    if (nextIndex >= this.state.images.length)
      nextIndex = 0;
    this.setState({ ...this.state, activeIndex: nextIndex });
  }
  
  renderImages = () => (
    Object.keys(images).map(key => (
      <Slide 
        key={key} 
        active={Number(key) === this.state.activeIndex}
        image={images[key].path}
      />
    ))
  );

  changeImage = (n) => {
    let nextIndex = this.state.activeIndex + n;
    if (nextIndex > this.state.images.length - 1)
      nextIndex = 0;
    if (nextIndex < 0)
      nextIndex = this.state.images.length - 1;
    this.setState({ ...this.state, activeIndex: nextIndex }, () => {
      this.cancelInterval();
      this.newInterval();
    });    
  }

  
  render() { 
    return (  
      <Container id='images'>
        {this.renderImages()}
        <Button onClick={() => this.changeImage(-1)}>
          <Arrow left/>
        </Button> 
        <Button onClick={() => this.changeImage(1)} next>
          <Arrow right/>
        </Button>
      </Container>      
    );
  }
}
 
export default Images;