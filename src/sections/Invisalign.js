import React from 'react';
import styled from 'styled-components';
import ImageInvisalign from '../media/images/invisalign.jpg'

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: #00004d;
`;

const DivContainer = styled.div`  
  height: 400px;
`;

const Divs = styled.div`
  margin: 0 auto;
  width: 70%;
`;

const Image = styled.img`
  float: right;
`;

const TextContainer = styled.p`
  font-size: 1em;
  text-align: left;
  color: #333333;
  margin-bottom: 30px;
`;

function Invisalign() {
  return (  
    <DivContainer id="invisalign"> 
      <Divs>
        <Title>
          Invisalign
        </Title>
        <Image src={ImageInvisalign} align="right"/>
        <TextContainer>
          Invisalign é o sistema de tratamento ortodôntico mais avançado do mundo, pois utiliza de vários recursos tecnológicos de última geração para o diagnóstico, 
          planejamento e tratamento de adolescentes, adultos e até pessoas idosas. 
        </TextContainer>
        <TextContainer>
          O tratamento é realizado com alinhadores dentários transparentes feitos por computador, nos Estados Unidos, e que são bastante imperceptíveis, 
          além de muito confortáveis. O Dr. Fernando Franco é classificado como TOP INVISALIGN PROVIDER, ou seja, 
          ele é um ortodontista bastante diferenciado no uso da técnica, aumentando ainda mais a qualidade dos resultados de seus pacientes.
        </TextContainer>
      </Divs>
    </DivContainer>                      
  );
}

export default Invisalign;