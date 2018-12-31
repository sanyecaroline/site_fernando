import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import TipsImage1 from '../media/images/tips1.jpg';
import TipsImage2 from '../media/images/tips2.jpg';
import TipsImage3 from '../media/images/tips3.jpg';
import TipsImage4 from '../media/images/tips4.jpg';


const DivContainer = styled.div`    
  height: 550px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const DivTitle = styled.div`
  margin-bottom: 40px;
  display: block;;
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
`;

const SubItem = styled.div`
  width: 300px;
  height: 180px;
  padding-left: 50px;
`;

const SubItemText = styled.p`
  color: #333;
`;

const SubItemLink = styled.a`
  color: rgb(1, 139, 211);
`;

const Separator = styled.hr`
  background-color: #232323;
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
        <Item>
          <SubItemImage>
            <img src={TipsImage1}/>
          </SubItemImage>
          <SubItem>
            <SubItemText>
              Alinhadores removíveis: Quais são as principais vantagens? &nbsp;
              <SubItemLink>[...] Saiba mais</SubItemLink>
            </SubItemText>
          </SubItem>
        </Item>
        <Item>
          <SubItemImage>
            <img src={TipsImage3}/>
          </SubItemImage>
          <SubItem>
            <SubItemText>
            Como funciona o tratamento com os alinhadores dentários? &nbsp;
              <SubItemLink>[...] Saiba mais</SubItemLink>
            </SubItemText>
          </SubItem>
        </Item>
        <Item>
          <SubItemImage>
            <img src={TipsImage2}/>
          </SubItemImage>
          <SubItem>
            <SubItemText>
            Aparelhos ortodônticos estéticos: Conheça os principais modelos. &nbsp;
              <SubItemLink>[...] Saiba mais</SubItemLink>
            </SubItemText>
          </SubItem>
        </Item>        
        <Item>
          <SubItemImage>
            <img src={TipsImage4}/>
          </SubItemImage>
          <SubItem>
            <SubItemText>
            Conheça o Invisalign: a forma mais estética, confortável e previsível existente. &nbsp;
              <SubItemLink>[...] Saiba mais</SubItemLink>
            </SubItemText>
          </SubItem>
        </Item>
      </Divs>      
    </DivContainer>                      
  );
}

export default Tips;