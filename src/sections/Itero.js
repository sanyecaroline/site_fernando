import React from 'react';
import styled from 'styled-components';
import ImageiTero from '../media/images/iTero.jpg'

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: ${props => props.theme.secondary.main}
`;

const DivContainer = styled.div`
  height: 400px;
  width: 80%;
  margin: auto;
  display: flex;
`;

const DivFundo = styled.div` 
  height: 400px;
  display: flex;
  align-itens: center;
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
    <DivFundo>
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
    </DivFundo>                      
  );
}

export default Itero;