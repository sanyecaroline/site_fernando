import React from 'react';
import styled, { css } from 'styled-components';
import Title from '../components/Title';
import tipsItens from '../consts/tipItens';
import { mobile } from '../utils/media';

const DivContainer = styled.div`    
  height: 550px;
  padding-top: 20px;
  padding-bottom: 20px;
  ${mobile(css`
    height: 1000px;
  `)};
`;

const DivTitle = styled.div`
  margin-bottom: 40px;
  display: block;
`;

const Divs = styled.div`
  width: 100%;  
  max-width: 1060px;
  margin: 0 auto;
  z-index: 3;
  height: 400px; 
  background: transparent;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
`;

const Item = styled.div`
  width: 500px;
  height: 180px;
  display: flex;
  flex-direction: row;
`;

const SubItemImage = styled.div`
  width: 150px;
  height: 150px;
  ${mobile(css`
    padding-left: 20px;
  `)};
`;

const SubItem = styled.div`
  width: 300px;
  height: 180px;
  padding-left: 50px;
  ${mobile(css`
    width: 200px;
  `)};
`;

const SubItemText = styled.p`
  color: ${props => props.theme.pallete.primary.main};
`;

const SubItemLink = styled.a`
  color: ${props => props.theme.pallete.secondary.main};
`;

const Separator = styled.hr`
  background-color: ${props => props.theme.pallete.primary.main};
  width: 60px;
  height: 5px;  
`;

function Tips() {
  return (  
    <DivContainer id="tips">       
      <DivTitle>
        <Title>
          Dicas sobre os Alinhadores Dentários Invisalign          
        </Title>  
        <Separator />
      </DivTitle> 
      <Divs>  
      {Object.keys(tipsItens).map(key => (
        <Item key={key}>
          <SubItemImage>
            <img src={tipsItens[key].image} alt={tipsItens[key].alt}/>
          </SubItemImage>
          <SubItem>
            <SubItemText>
              {tipsItens[key].text}
              <SubItemLink>[...] Saiba mais</SubItemLink>
            </SubItemText>
          </SubItem>
        </Item>       
      ))} 
      </Divs>      
    </DivContainer>                      
  );
}

export default Tips;