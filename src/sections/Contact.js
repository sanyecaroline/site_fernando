import React from 'react';
import styled from 'styled-components';
import LogoFernando from '../media/images/logoFernando.png';
import LogoInspirar from '../media/images/logoInspirar.png';
import {PhoneIcon, MailIcon, LocationIcon} from '../components/ContactIcons';

const DivContainer = styled.div`  
  height: 320px;
  background-color: rgba(242,243,248,1);
  padding-top: 70px;
  padding-bottom: 70px;
  z-index: 3;
`;

const Divs = styled.div`
  width: 100%;  
  max-width: 1060px;
  margin: 0 auto;
  text-align: center; 
  z-index: 3;
`;

const DivContact = styled.div`
  float: left;
  margin-left: 5%;
  z-index: 2;
  width: 45%;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  float: left;  
`;

const DivWidgetText = styled.div`
  margin-bottom: 40px;
  display: block;
  height: 140px;
`; 

const List = styled.div`
  list-style-type:none;
  padding:0;
  margin:0;  
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 12px;
  color: #666;
`;

const Item = styled.div`
  width:100%;  
  padding:8px 16px;
  float:left;
  border:none;
  line-height: 25px;  
`;

const Icon = styled.i`
  float:left;
  width:auto;
  border:none;
  display:block;
  outline:0;
  border-radius:50%;
  width: 30px;
`; 

const TextItem = styled.span`
  padding-left: 15px;
  display: inline-block;
`;


function Contact() {
  return (  
    <DivContainer id="contact"> 
      <Divs>  
        <DivContact>
          <DivWidgetText>
            <p>
              <Image src={LogoFernando}width='300px' height='100px'></Image>
            </p>
          </DivWidgetText>
          <DivWidgetText>
            <List>
              <Item>
                <Icon>
                 <PhoneIcon /> 
                </Icon>
                <TextItem>
                  (37) 3215-8363
                </TextItem>
              </Item>
              <Item>
                <Icon>
                 <PhoneIcon /> 
                </Icon>
                <TextItem>
                  (37) 3215-8363
                </TextItem>
              </Item>
              <Item>
                <Icon>
                 <MailIcon /> 
                </Icon>
                <TextItem>
                  contato@fernandofranco.com.br
                </TextItem>
              </Item>
              <Item>
                <Icon>
                 <LocationIcon /> 
                </Icon>
                <TextItem>
                  R. São Paulo, 486 - Centro, Divinópolis - MG, 35500-006
                </TextItem>
              </Item>
            </List>
          </DivWidgetText>
        </DivContact>
        <DivContact>
        <DivWidgetText>
            <p>
              <Image src={LogoInspirar} width='250px' height='80px'></Image>
            </p>
            <br />
          </DivWidgetText>
          <DivWidgetText>
            <List>
              <Item>
                <Icon>
                 <PhoneIcon /> 
                </Icon>
                <TextItem>
                  (37) 3215-8363
                </TextItem>
              </Item>
              <Item>
                <Icon>
                 <PhoneIcon /> 
                </Icon>
                <TextItem>
                  (37) 3215-8363
                </TextItem>
              </Item>
              <Item>
                <Icon>
                 <MailIcon /> 
                </Icon>
                <TextItem>
                  contato@fernandofranco.com.br
                </TextItem>
              </Item>
              <Item>
                <Icon>
                 <LocationIcon /> 
                </Icon>
                <TextItem>
                  R. São Paulo, 486 - Centro, Divinópolis - MG, 35500-006
                </TextItem>
              </Item>
            </List>
          </DivWidgetText>
        </DivContact>
      </Divs>      
    </DivContainer>                      
  );
}

export default Contact;