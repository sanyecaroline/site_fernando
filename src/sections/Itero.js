import React from 'react';
import styled from 'styled-components';
import ImageiTero from '../media/images/iTero.jpg'

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: #00004d;
`;

const DivContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 400px;
`;

const Divs = styled.div`
  width: 50%;
  margin: 0 auto;
`;

const Image = styled.img`
  margin: 50px 0 0;
`;

const TextContainer = styled.p`
  font-size: 1em;
  text-align: center;
  color: #333333;
`;

function Itero() {
  return (  
    <DivContainer id="iTero"> 
      <Divs>
        <Title>
          Conheça o iTero
        </Title>
        <TextContainer>
          Na Clínica Fernando Franco, utilizamos o scanner ortodôntico mais inovador do mercado.
          <br />
          O iTero faz uma verdadeira varredura ótica a laser com total exatidão. 
          <br />
          O escaneamento da boca é feito de maneira rápida.
          <br />
          Ou seja, muito diferente dos métodos tradicionais.
        </TextContainer>
      </Divs>
      <Divs>
        <Image src={ImageiTero} />
      </Divs>
    </DivContainer>                      
  );
}

export default Itero;