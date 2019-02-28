import React from 'react';
import styled, { css } from 'styled-components';
import { mobile, desktop2 } from '../utils/media';
import Logo from '../components/Logo';

import rem from '../utils/rem';

const DivContainer = styled.div`  
  height: ${rem(1020)};
  ${mobile(css`
    height: ${rem(1150)};
  `)};
`;

const Divs = styled.div`
  margin: 0 auto;
  width: 50%;  
  ${desktop2(css`
    width: 75%;
  `)};
  ${mobile(css`
    width: 80%;
  `)};
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

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: ${props => props.theme.pallete.primary.main};
  ${mobile(css`
    display: none;
  `)};
`;

const TextContainer = styled.p`
  font-size: 1em;
  text-align: left;
  color: #333333;
  margin-bottom: 30px;
`;

const LogoRight = styled.div`
  float: right;
`;

function Invisalign() {
  return (  
    <DivContainer id="invisalign"> 
      <Divs>
        <Title>
          Invisalign
        </Title>
        <LogoRight>        
          <Logo height={90} width={350} withSubText/>
        </LogoRight>

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
          src="https://www.youtube.com/embed/2hDc1ttTOzU" 
          frameBorder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
        </Video>
    </DivContainer>                      
  );
}

export default Invisalign;