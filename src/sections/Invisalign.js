import React from 'react';
import styled from 'styled-components';
import ImageInvisalign from '../media/images/invisalign.jpg'
import Title from '../components/Title';

const DivContainer = styled.div`  
  height: 900px;
`;

const Divs = styled.div`
  margin: 0 auto;
  width: 50%;
`;

const Video = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
  width: 90%;
  margin: 0 auto;
  max-width: 1300px;
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
      <Video>
        <iframe width="890" 
          title='Video Invisalign'
          height="500" 
          src="https://www.youtube.com/embed/ZKd38Ku7JNQ" 
          frameBorder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
        </Video>
    </DivContainer>                      
  );
}

export default Invisalign;