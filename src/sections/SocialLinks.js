import React from 'react';

import styled from 'styled-components';

import rem from '../utils/rem';

const Link = styled.a`
  width: 28px;
  height: 28px;
  line-height: 30px;
  text-align: center;
  border-style: solid;
  border-width: 0px;
  border-color: #323232;
  background-color: #168cd0;
  color: #ffffff;   
  transition: background-color 0.4s ease;
  -webkit-transition: background-color 0.4s ease; 
  &:hover {
    background-color: #04539d;
    transition: background-color 0.4s ease;
    -webkit-transition: background-color 0.4s ease; 
  }  
`;

const Svg = styled.svg`
  width: ${p => rem(Number(p.width))};
  height: ${p => rem(Number(p.height))};    
  top: 10px;
`

const FacebookIcon = () => (
  <Svg width="16" height="16" viewBox="0 0 31 31">
    <title>facebook</title>
    <path fill="#fff" d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z"></path>    
  </Svg>
)

function SocialLinks(props) {
  return (
    <Link href='/teste'>
      <FacebookIcon />
    </Link>
  );
}

export default SocialLinks;