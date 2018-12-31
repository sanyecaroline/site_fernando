import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import rem from '../utils/rem';

import textMenus from '../consts/textMenus';

import { mobileMenuHeight } from '../consts/sizes'

const NavLink = styled.a`  
  display: inline-block;  
  text-decoration: none;
  cursor: pointer;  
  letter-spacing: ${rem(0.9)};  
  padding-left: 20px;  
  position: relative;  
  color: #474747;  
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  border-bottom: 1px solid #efefef;
  font-size: 11px;  
`;

const ContainerMenuList = styled.div`
  position: relative;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  align-items: right;
  justify-content: center;  
  width: 100%;  
  top: 10px;
  opacity: ${props => props.active ? 1 : 0};  
  visibility: ${props => props.active ? 'visible' : 'hidden'};
  -webkit-transition: opacity 600ms, visibility 600ms, max-height 600ms; 
  transition: opacity 600ms, visibility 600ms, max-height 600ms;
  max-height: ${props => !props.active ? '0' : `${mobileMenuHeight}px`};    
  line-height: 10px;
`;

function MobileNavLinks(props) {  
  return (
    <ContainerMenuList active={props.active}>
      {Object.keys(textMenus).map(key => <NavLink onClick={props.handleActive} key={key} href={textMenus[key].link}>{textMenus[key].text}</NavLink>)}      
    </ContainerMenuList>
  );
}

export default MobileNavLinks;

MobileNavLinks.propTypes = {
  handleActive: PropTypes.func.isRequired,
}