import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from "react-scroll";

import { mobile } from '../utils/media';

const DivContainer = styled.div`  
  height: 116px;
  background-color: ${props => props.theme.pallete.primary.main};
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Divs = styled.div`
  width: 100%;  
  max-width: 1060px;
  margin: 0 auto;
  text-align: center; 
  z-index: 3;
  height: 116px;
  padding: 30px 0px;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
  ${mobile(css`
    padding: 0px 0px;
  `)};
`;

const TextContainer = styled.h2`
  font: 700 41px "Lato","Open Sans","Arial",sans-serif;
  display: inline;
  line-height: 47px;
  margin-right: 40px;
  color: ${props => props.theme.pallete.secondary.main};
  letter-spacing: 0px;
  text-transform: none;
`;

const Button = styled(Link)`
  border:none;
  display:inline-block;
  padding:8px 16px;
  vertical-align:middle;
  overflow:hidden;
  text-decoration:none;
  color: ${props => props.theme.pallete.secondary.main};
  background-color: ${props => props.theme.pallete.primary.light};
  text-align:center;
  cursor:pointer;
  white-space:nowrap;
  transition: background-color 0.4s ease;
  &:hover {
    box-shadow:0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);    
    background-color:rgb(255, 255, 255)!important;    
    transition: background-color 0.4s ease;
  };
`;

function Evaluation() {
  return (  
    <DivContainer id="evaluation"> 
      <Divs>
        <TextContainer>
          Agende já sua avaliação
        </TextContainer> 
        <Button 
          to='contact'
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          EU QUERO!
        </Button>            
      </Divs>      
    </DivContainer>                      
  );
}

export default Evaluation;