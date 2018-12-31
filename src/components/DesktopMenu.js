import React from 'react';

import styled, { css } from 'styled-components';

import DesktopNavLinks from './DesktopNavLinks';
import Logo from './Logo';
import { mobile } from '../utils/media';

const Container = styled.div`
  display: flex;  
  -webkit-flex-direction: row;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;  
  width: 100%;
  ${mobile(css`
    display: none;  
  `)};  
`;

const ContainerLogo = styled.div`
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;  
  margin: 0 auto;
`;

const Nav = styled.nav`
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`;

function DesktopMenu(props) {
  return (
    <Nav>
      <ContainerLogo>
        <Logo />
      </ContainerLogo>
      <Container>
        <DesktopNavLinks />
      </Container>                 
    </Nav>   
  );
}

export default DesktopMenu;

//display: -webkit-flex;