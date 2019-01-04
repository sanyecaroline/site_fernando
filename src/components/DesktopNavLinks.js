import React from 'react';

import styled from 'styled-components';

import textMenus from '../consts/textMenus';

//Com tab está ficando uma "borda" no link, retirar

const Ul = styled.ul`
  list-style: none;
  text-align: center;
`;

const Li = styled.li`
  display: inline-block;
`;

const A = styled.a`
  display: block;
  padding: 15px;
  text-decoration: none;
  color: #aaa;
  font-weight: 800;
  text-transform: uppercase;
  margin: 0 10px;
  position: relative;
  &, &::after, &::before {
    transition: all .5s;
  }
  &:hover {
    color: #767676;
  }
  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 0%;
    content: '.';
    color: transparent;
    background: #aaa;
    height: 1px;
  }
  &:hover::after {
    width: 100%;
  }
`;

function NavLinks(props) {
  return (
    <Ul>
      {Object.keys(textMenus).map(key => (
        <Li key={key}>
          <A href={textMenus[key].link}>{textMenus[key].text}</A>
        </Li>
      ))}      
    </Ul>
  );
}

export default NavLinks;