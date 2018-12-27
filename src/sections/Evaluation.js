import React from 'react';
import styled from 'styled-components';


const DivContainer = styled.div`  
  height: 150px;
  background-color: #24478f;
  display: flex;
  flex-direction: row;
`;

const Divs = styled.div`
  width: 50%;
  justify-content: center;
`;

const TextContainer = styled.p`
  font-size: 3em;
  text-align: right;
  color: #ffffff;
`;

const Button = styled.a`
  border-style: solid; 
  border-width: 0px; 
  border-color: rgb(255, 255, 255); 
  background-color: rgb(23, 60, 124); 
  color: rgb(255, 255, 255);
  width: 85px;
  height: 15px;
  background-clip: border-box;
  transition-delay: 0s;
  transition-duration: 0.3s;
  transition-property: all;
  transition-timing-function:linear;
`;

function Evaluation() {
  return (  
    <DivContainer id="evaluation"> 
      <Divs>
        <TextContainer>
          Agende já sua avaliação
        </TextContainer>             
      </Divs>      
      
    </DivContainer>                      
  );
}

export default Evaluation;