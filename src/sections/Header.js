import React from 'react';

import PropTypes from 'prop-types';

import style from 'styled-components';

import TopHeader from '../components/TopHeader';
import DesktopMenu from '../components/DesktopMenu';
import MobileMenu from '../components/MobileMenu';

import { zHeader } from '../consts/zIndex';

const HeaderContainer = style.header`
  height: auto;  
  z-index: ${zHeader};  
`;

function Header(props) {
  const { isMobile } = props;
  console.log(isMobile);
  return (    
    <HeaderContainer>
      <TopHeader />
      {!isMobile && <DesktopMenu /> }
      {isMobile && <MobileMenu />}
    </HeaderContainer>
  );
}

export default Header;

Header.propTypes = {
  isMobile: PropTypes.bool.isRequired,
}