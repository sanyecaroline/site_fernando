import React from 'react';
import styled, { css} from 'styled-components';
import ImageiTero from '../media/images/iTero.jpg';
import { desktop2, desktop1 } from '../utils/media';

const AboutDiv = styled.div`
  align-self: flex-end;
  background: white;
  width: 80%;  
  display: flex; 
  z-index: 20;    
  padding: 15px;  
  margin: 0 auto;         
  ${desktop2(css`
    align-self: auto;
  `)};   
`;

const DivContainer = styled.div`
  display: flex;
  ${desktop2(css`
    display: block;
  `)};
`;

const ImgContainer = styled.div`
  width: 100%;    
  display: flex;
  margin: 0 auto;
  max-height: 650px;
  ${desktop2(css`
    max-width: 400px;
    max-height: 250px; 
  `)};
  ${desktop1(css`
    width: 50%;        
    display: flex;
    float: right;
    padding: 1em; 
  `)}
`;

const Image = styled.img`
  max-width: 100%;    
  margin: 0 auto;
  object-fit: cover;
`;

const TextContainer = styled.p`
  display: flex;      
  ${desktop1(css`
    padding: 2em 3em 0 3em;
    display: flex;
    line-height: 2;
    text-align: center;
  `)};
`;

const Text = styled.div`
  width: 100%;
  font-weight: lighter; 
  margin: 0 auto;
  text-align: center;   
  color: ${props => props.theme.pallete.primary.main};
`;

const TextH2 = styled.h3`
  margin: 0;
  font-size: 2.827em;   
`;

function Itero() {
  return (  
    <AboutDiv>
    <Text id="iTero"> 
        <TextH2>
          Conheça o iTero
        </TextH2>
        <div />    
        <DivContainer> 
        <TextContainer>
          Na Clínica Fernando Franco, utilizamos o scanner ortodôntico mais inovador do mercado.
          <br />
          O iTero faz uma verdadeira varredura ótica a laser com total exatidão. 
          <br />
          O escaneamento da boca é feito de maneira rápida.
          <br />
          Ou seja, muito diferente dos métodos tradicionais.
        </TextContainer>
        <ImgContainer >
          <Image src={ImageiTero} />      
        </ImgContainer>
        </DivContainer>            
    </Text>
    </AboutDiv>                      
  );
}

export default Itero;