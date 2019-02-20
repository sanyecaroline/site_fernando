import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import Logo from './Logo';
import MobileNavLinks from './MobileNavLinks';

const activeCss = css`        
  background-color: transparent;  
  -webkit-transition: background-color 0.5s;
  -moz-transition: background-color 0.5s;
  transition: background-color 0.5s;      
  ::before, &::after {
    top: 0;    
  }   
  &::before {
    transform: rotate(45deg);
  } 
  &::after {
    transform: rotate(-45deg);
  }    
`;

const IconMenuMobile = styled.span`
  background-color: ${props => props.theme.pallete.primary.main};
  width: 22px;
  height: 2px;
  display: inline-block;
  position: relative;  
  border-radius: 2px;
  top: -1px;
  left: 0px;
  -webkit-transition: background-color 0.5s;
  -moz-transition: background-color 0.5s;
  transition: background-color 0.5s; 
  &::before, &::after {
    background-color: ${props => props.theme.pallete.primary.main};    
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    right: 0;
    border-radius: 2px;
    -webkit-transition: -webkit-transform .4s, top .4s, background-color 0.5s, width 0.2s;
    -moz-transition: -moz-transform .4s, top .4s, background-color 0.5s width 0.2s;
    transition: transform .4s, top .4s, background-color 0.5s width 0.2s;    
  }
  &::before{
    top: -6px;
  }
  &::after {
    top: 6px;
  }
  ${props => props.active && activeCss}
`;

const ClickedLink = styled.a`
  width: 30px;
  height: 30px;
  display: inline-block;
  position: relative;
  top: 0px;  
  left: -15px;
`;

const ContainerLogo = styled.div`
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;  
  margin: 0 auto;
  padding: 8px;
`;

ContainerLogo.displayName = 'ContainerLogo';

const ContainerIconMenu = styled.div`
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;  
  width: 80%;
  margin: 0 auto;
`;

const ContainerTopMenu = styled.div`
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;


const Nav = styled.nav`
  text-transform: uppercase;
  margin-top: 7px;
`;

class MobileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false }
  }

  handleActive = () => {        
    this.setState({ active: !this.state.active });
  }
  
  render() {     
    return ( 
      <Nav>
        <ContainerTopMenu>
          <ContainerLogo>
            <Logo  height={60} width={300} />
          </ContainerLogo>   
          <ContainerIconMenu>
            <ClickedLink onClick={this.handleActive}>
              <IconMenuMobile active={this.state.active}/>
            </ClickedLink>
          </ContainerIconMenu>     
        </ContainerTopMenu>           
        <MobileNavLinks active={this.state.active} handleActive={this.handleActive}/>        
      </Nav> 
    );
  }
}
 
export default MobileMenu;
