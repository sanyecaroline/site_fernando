import React from 'react';

import styled, { css } from 'styled-components';

import NavLinks from './NavLinks';
import Logo from './Logo';
import { mobile } from '../utils/media';

const ContainerMenuDesktop = styled.div`
  display: none;
  display: -webkit-flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;  
  width: 100%;
  ${mobile(css`
    display: none;  
  `)};  
`;

const ContainerMenuMobile = styled.div`
  display: none;
  display: -webkit-flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;  
  width: 100%;
  ${mobile(css`
    display: flex;  
  `)};
  
`;

const ContainerLogo = styled.div`
  display: flex;
  display: -webkit-flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;  
  margin: 0 auto;
`;

const Nav = styled.nav`
  display: flex;
  display: -webkit-flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`;

const IconMenuMobile = styled.span`
  background-color: #232323;
  width: 18px;
  height: 2px;
  display: inline-block;
  position: relative;
  top: 20px;
  left: 200px;  
  border-radius: 2px;
  &:active {    
    background-color: transparent;  
  }
  &:active::before, &:active::after {
    top: 0;    
  }   
  &:active::before {
    transform: rotate(45deg);
  } 
  &:active::after {
    transform: rotate(-45deg);
  }
  &::before, &::after {
    background-color: #232323;    
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    right: 0;
    -webkit-transition: -webkit-transform .5s, top .5s, background-color 0.3s, width 0.2s;
    -moz-transition: -moz-transform .5s, top .5s, background-color 0.3s width 0.2s;
    transition: transform .5s, top .5s, background-color 0.3s width 0.2s;
    border-radius: 2px;
  }
  &::before{
    top: -5px;
  }
  &::after {
    top: 5px;
  }

`;

function Menu(props) {
  return (    
    <Nav>
      <ContainerLogo>
        <Logo />
      </ContainerLogo>
      <ContainerMenuDesktop>
        <NavLinks />
      </ContainerMenuDesktop>   
      <ContainerMenuMobile>
        <a href='#'>
          <IconMenuMobile /> 
        </a>
        <NavLinks />
      </ContainerMenuMobile>   
    </Nav>    
  );
}

export default Menu;