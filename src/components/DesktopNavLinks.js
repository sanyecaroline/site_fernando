import React, { Fragment } from 'react';

import styled from 'styled-components';

import rem from '../utils/rem';
import { navbarHeight } from '../consts/sizes';

import textMenus from '../consts/textMenus';

//Com tab está ficando uma "borda" no link, retirar

const NavLink = styled.a`  
  display: inline-block;  
  text-decoration: none;
  line-height: ${rem(navbarHeight)};  
  cursor: pointer;  
  letter-spacing: ${rem(1.0)};  
  padding: 0px 20px;  
  position: relative;  
  color: #000;  
  transition: color 0.3s ease;
  -webkit-transition: color 0.3s ease; 
  
  &:hover {
    color: #018bd3;
  }  
  &:after{
    content: "";
    display: block;
    width: 0;
    border-bottom: 2px solid;
    margin: 0 auto;
    transition:all 0.5s ease;
    -webkit-transition: all 0.5s ease;
    color: #018bd3;
  }
  &:hover::after{
    width: 30%;
    transition:all 0.5s ease;
    -webkit-transition: all 0.5s ease;
    color: #018bd3;
  } 
`;

function NavLinks(props) {
  return (
    <Fragment>
      {Object.keys(textMenus).map(key => <NavLink key={key} href={textMenus[key].link}>{textMenus[key].text}</NavLink>)}      
    </Fragment>
  );
}

export default NavLinks;