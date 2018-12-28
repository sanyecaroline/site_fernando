import React from 'react';

import style from 'styled-components';

import Menu from './Menu';
import TopHeader from './TopHeader';

import { zHeader } from '../utils/zIndex';

const HeaderContainer = style.header`
  height: auto;  
  z-index: ${zHeader};  
`;

function Header(props) {
  return (    
    <HeaderContainer>
      <TopHeader />
      <Menu />
    </HeaderContainer>
  );
}

export default Header;