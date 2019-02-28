import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from "react-scroll";

import { mobile } from '../utils/media';

const DivContainer = styled.div`  
  height: 116px;
  background-color: ${props => props.theme.pallete.primary.main};
  padding-top: 20px;
  padding-bottom: 20px;
  ${mobile(css`
    padding-top: 2px;
    padding-bottom: 60px;
  `)};
`;

const Divs = styled.div`
  width: 100%;  
  max-width: 1060px;
  margin: 0 auto;
  z-index: 3;
  height: 116px;  
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
  display: flex;
  flex-direction: row;    
  ${mobile(css`
    padding: 0px 0px;
    flex-direction: column;    
  `)};
`;

const TextContainer = styled.h2`
  font: 700 41px "Lato","Open Sans","Arial",sans-serif;  
  color: ${props => props.theme.pallete.secondary.main};   
  ${mobile(css`
    font: 700 31px "Lato","Open Sans","Arial",sans-serif;  
  `)}; 
`;

const DivTextContainer = styled.div`
  width:60%;
  text-align: right;
  padding-right: 10px;
  ${mobile(css`
    width:100%;
    text-align: center;
    padding-right: 0px;
  `)};
`;

const DivButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  ${mobile(css`
    width:100%;    
    flex-direction: inherit;
    height: 20px;
  `)};
`;

const Button = styled(Link)`
  border:none;  
  position: relative;
  padding:8px 16px;  
  text-decoration:none;
  color: ${props => props.theme.pallete.secondary.main};
  background-color: ${props => props.theme.pallete.primary.light};  
  cursor:pointer;  
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
        <DivTextContainer>
          <TextContainer>
            Agende já sua avaliação
          </TextContainer> 
        </DivTextContainer>
        <DivButtonContainer>
          <Button 
            to='contact'
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
          >
            EU QUERO!
          </Button>
        </DivButtonContainer>
      </Divs>      
    </DivContainer>                      
  );
}

export default Evaluation;