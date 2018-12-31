import React from 'react';
import styled from 'styled-components';


const DivContainer = styled.div`  
  height: 116px;
  background-color: #293c67;
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
`;

const TextContainer = styled.h2`
  font: 700 41px "Lato","Open Sans","Arial",sans-serif;
  display: inline;
  line-height: 47px;
  margin-right: 40px;
  color: #ffffff;
  letter-spacing: 0px;
  text-transform: none;
`;

const Button = styled.a`
  border:none;
  display:inline-block;
  padding:8px 16px;
  vertical-align:middle;
  overflow:hidden;
  text-decoration:none;
  color:rgb(255, 255, 255);
  background-color:rgb(23, 60, 124);
  text-align:center;
  cursor:pointer;
  white-space:nowrap;
  &:hover {
    box-shadow:0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    color:#000!important;
    background-color:rgb(255, 255, 255)!important;    
  };
`;

function Evaluation() {
  return (  
    <DivContainer id="evaluation"> 
      <Divs>
        <TextContainer>
          Agende já sua avaliação
        </TextContainer> 
        <Button href="#contact">EU QUERO!</Button>            
      </Divs>      
    </DivContainer>                      
  );
}

export default Evaluation;