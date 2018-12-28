import React from 'react';

import styled, { css } from 'styled-components';

import NavLinks from './NavLinks';
import Logo from './Logo';
import { mobile } from '../utils/media';

const ContainerMenuDesktop = styled.div`
  display: flex;
  display: -webkit-flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  margin: 0 auto;
  align-items: center;  
  justify-content: center;  
  ${mobile(css`
    display: none;  
  `)};
  
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

function Menu(props) {
  return (    
    <Nav>
      <Logo />
      <ContainerMenuDesktop>
        <NavLinks />
      </ContainerMenuDesktop>
    </Nav>    
  );
}

export default Menu;